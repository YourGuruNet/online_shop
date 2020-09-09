import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("You clicked on me")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("add to card");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {""}
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;

// First we make <ProductWrapper>, it is a container for all products.
// Then inside I made a cart component.
// Inside cart component I insert image container, and in image container also a
//image tag with onClick event, and <Link> component with rout to detail page.
// Button - I created button tag with disabled function, if product is in the cart return true
//otherwise return false thats mean it will be allowed to click on button only once after
//clicked and added to cart it will show paragraph with text "In Card" otherwise you will see icon.
