import React, { Component } from "react";
import Product from "../components/Product";
import Title from "../components/Title";
import { storeProducts } from "../Data";

// Import dates about product from storeProduct map from data.js file and then pass them to state as products.
export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
      console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row" style={{ display: "flow-root" }}>
              <Title name="All" title="products" />
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}
//Inside title we give a value for props so title element know what exact to show on screen
