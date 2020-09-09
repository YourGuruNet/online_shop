import React, { Component } from "react";
import Product from "../components/Product";
import ProductTitle from "../components/ProductTitle";
import { ProductConsumer } from "../Context";

// Import dates about product from storeProduct map from data.js file and then pass them to state as products.
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <ProductTitle name="All" title="products" />{" "}
            {/* Inside ProductTitle we give a value for props so title element know what exact to show on screen */}
            <div className="row" style={{ display: "flow-root" }}>
              <ProductConsumer>
                {/* Creat a function to get prop from Context.js value is a function name but we can use any word that's don't meter */}
                {(value) => {
                 return value.products.map( product => {
                   return <Product key={product.id} product={product}/>;
                 })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
// We can see two different props passing ways:
// 1) Firs is when we pass element and gives value for example <h1>{name}</h1> value name="hello".
// 2) Second When we pass value for example text "Hello world" and use function
//to put this prop value inside childe component <h1></h1> ore different sou we set value for all child components.
// In our case we pass date values to <Product/> element what gives us impossibility to use all product info in to product
// but wee steal use the same function to get this values