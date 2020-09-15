import React, { Component } from "react";
import { detailProduct, storeProducts } from "./Data";

const ProductContext = React.createContext();
//Provider
//Consumer

//states are starting values
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    CartTax: 0,
    CartTotal: 0,
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

  //This function opens a small product card when clicking on product insert to card icon at the product page
  //The function returns the modal product as a product from the list and set modalOpen to true from false,
  //that's mean that the card opens
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  //The function returns opposite and set modalOpen to false from true,
  //that's mean that the card closed
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  // This is a place wer you can find functions for Cart page!
  increment = (id) => {
    console.log("This is increment method");
  };
  decrement = (id) => {
    console.log("This is decrement method");
  };
  removeItem = (id) => {
    console.log("Item is removed");
  };
  clearCart = (id) => {
    console.log('Cart is empty')
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
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
/*<ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCard: this.addToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
        }}
      > //This is a way how to pass props to another page ore element.*/
