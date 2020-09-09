import React, { Component } from "react";
import { detailProduct, storeProducts } from "./Data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("Hello form product");
  };
  addToCard = () => {
    console.log("Product is in card");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCard: this.addToCard,
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
