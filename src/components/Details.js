import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            company,
            img,
            info,
            price,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-title text-yellow my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" style={{maxHeight: '40rem'}}/>
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1
                    className="text-title text-uppercase mt-3 mb-2"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Model: {title}
                  </h1>
                  <h4
                    className="text-title text-uppercase text-yellow mt-3 mb-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <span style={{ color: "black" }}>Made by:</span> {company}
                  </h4>
                  <p className="mt-3 mb-2" style={{ fontSize: "1rem" }}>
                    <span className="text-title" style={{ fontSize: "1.2rem" }}>
                      Info about this product:
                    </span>
                    <br />
                    {info}
                  </p>
                  <h2
                    className="text-title text-uppercase mt-3 mb-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Price:
                    <strong style={{ color: "#00ff00" }}>${price}</strong>
                  </h2>
                  {/* buttons*/}
                  <div className="row">
                    <Link to="/ProductList">
                      <Button style={{ marginLeft: "0.5rem" }}>
                        <i class="fas fa-arrow-circle-left" /> back to products
                      </Button>
                    </Link>
                    <Button
                      cart
                      style={{ marginLeft: "0.5rem" }}
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {/* Made two if statements first are for the icon, second is for the extra button name*/}
                      {inCart ? (
                        <i class="fas fa-shopping-bag" />
                      ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                      {inCart ? " Already In Cart" : " Add to card"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
//I get props with Product Consumer from context.js and made a detail page for all products passing props
/*{(value) => {
          const {
            id,
            title,
            company,
            img,
            info,
            price,
            inCart,
          } = value.detailProduct;
          return ( 
We take props from ProductsConsumer give them name value and return the product detail page */

/* disabled={inCart ? true : false} this if statement checks, if the product is in the cart, then
 the button is disabled, otherwise button is active.*/
