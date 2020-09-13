import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
         {/* ProductConsumer let us pass props to product! And agent we call them "value" and use to pass function to on click */} 
        <ProductConsumer>
          {(value) => (
            <div
            className="img-container p-5"
            onClick={() => value.handleDetail(id)
            }
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                value.addToCart(id);
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
          )}
          </ProductConsumer>
          {/*Card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 text-yellow">{title}</p>
            <h5 className="text-yellow font-italic mb-0">
              <span className="mr-1">$</span>{price}</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

//PropType is built-in the react app and it helps you debug the mistakes so you give any props a necessary type
//for example price needs to be a number
Product.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
};

//I made a ProductWrapper component where I can edit any style for any component inside it
const ProductWrapper = styled.div`
.card{
  border-color: transparent;
  transition: all 0.5s linear;
  background-color: rgba(0, 0, 0, 0.700);
}
.card-footer{
  
  border-top: solid 0.05rem var(--mainYellow);
  transition: all 0.5s linear;
}
&:hover{
  .card{
    border: 0.04rem solid var(--mainYellow);
    box-shadow: 2px 2px 10px 0px  var(--mainYellow);
  }
  .card-footer{
    background: rgba(0, 0, 0, 0.300);
  }
}
.img-container{
  position: relative;
  overflow: hidden; /*Use because other way picture we'll be all over the screen */
}
.card-img-top{
  transition: all 0.5s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
.cart-btn{
  position:absolute;
  bottom: 0;
  right: 0;
  padding: 0.3rem 1rem;
  text-transform: capitalize;
  color: var(--mainYellow);
  font-size: 1rem;
  background: transparent;
  border: 0.05rem solid var(--mainYellow);
  border-radius: 0.5rem 0 0 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  transform:translate(100%, 100%);
  transition: all 0.5s linear;
  &:hover {
    background-color: var(--mainYellow);
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  } 
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
  }
`;

// First we make <ProductWrapper>, it is a container for all products.
// Then inside I made a cart component.
// Inside cart component I insert image container, and in image container also a
//image tag with onClick event, and <Link> component with rout to detail page.
// Button - I created button tag with disabled function, if product is in the cart return true
//otherwise return false thats mean it will be allowed to click on button only once after
//clicked and added to cart it will show paragraph with text "In Card" otherwise you will see icon.
// Card footer: I made a box with bootstrap classes and inside this block is a product name and price
// with I pass using props from the data source.