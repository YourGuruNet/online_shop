import React, { Component } from "react";
import { detailProduct, storeProducts } from "./Data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
  };
  //I use componentDidMount so I can get data from Data.js to add data with no references to my product page!
  // {...item} means that we copy all items from data.js
  // This function set all Data.js products as tempProducts
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  //getItem by id and set the value of product state from this page named products
  // and use the find a method to check and use products with the same id
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // handleDetail gets id with function getItem
  //that's why every time we press on the product image we get product details
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // I get  index from getItem function and pass the value to product variable so now product in tempProduct with exact index
  // I created temp Product so i don't accidentally change any value
  addToCart = (id) => {
    let tempProducts = [...this.state.products]; //give the value for tempProducts
    const index = tempProducts.indexOf(this.getItem(id)); // give value for index 
    const product = tempProducts[index]; // products is the same as tempProducts by index
    product.inCart = true; // now change product inCart value to true
    product.count = 1; // count from 0 to 1
    const price = product.price; // set product price from product.price
    product.total = price; // and total also is the same ass prices
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCard: this.addToCart,
        }}
      >
        {this.props.children}
        {/* I made props with value and pass it to ProductList.js wer we get it with function */}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
// {this.props.children}  gives us to ability to insert different elements ass a props for example (<h1>Hello World!</h1>)
// value for props.children can be text inside "" ore as on our example it is a object
