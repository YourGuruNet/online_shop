import React, { Component } from "react";
import { detailProduct, storeProducts } from "../src/Data";

const ProductContext = React.createContext();
//Provider
//Consumer

//states are starting values
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
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
        this.addTotal();
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
  // This is a place wer you can find functions for Cart page!//////////////////////////////////////////////////////////
  increment = (id) => {
    let tempCart = [...this.state.cart];
    //selected products are products wits id if it's mach by id
    const selectedProduct = tempCart.find((item) => item.id === id);
    //index is tempCart index from selected products
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    // I take props from addToCart
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    //selected products are products wits id if it's mach by id
    const selectedProduct = tempCart.find((item) => item.id === id);
    //index is tempCart index from selected products
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    // I take props from addToCart
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProduct = [...this.state.products]; //made new variables
    let tempCart = [...this.state.cart];
    // If there well be missing id, then product with id that not mach well be removed.
    tempCart = tempCart.filter((item) => item.id !== id);

    //we made new template for product and now we can delate product from it and retune new product list
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    //we set agent that cart is back to tempCart where is deleted out missing id products.
    //now we see on screen new tempProduct list
    // add total is cleared
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProduct],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  // Clear cart take my states and clear cart state to empty array
  // and the we make callback function to setProduct template to zero agent and the same with addTotal()
  clearCart = (id) => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  // I add parseFloat and toFixed so wee see tax number with 2 number after.
  // addTotal just count values we pass to shopping cart! We get them from subtotal value with we get
  // every time we insert something in to cart
  //I pass this function to addToCart() function
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.21;
    const tax = parseFloat(tempTax.toFixed(2));
    const totalPrice = subTotal + tax;
    const total = parseFloat(totalPrice.toFixed(2));
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        CartTax: tax,
        CartTotal: total,
      };
    });
  };

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
