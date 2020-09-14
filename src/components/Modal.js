import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { Button } from "./Button";
import { Link } from "react-router-dom";

//I use ProductConsumer and props to get values from context.js and set them as const
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5
                        className="text-title"
                        style={{
                          color: "var(--mainYellow)",
                          fontSize: "1.2rem",
                          letterSpacing: "0.1rem",
                        }}
                      >
                        item added to the cart
                      </h5>
                      <img src={img} className="img-fluid" alt="Product" />
                      <h5 style={{ color: "var(--mainYellow)", marginTop: "0.4rem" }}>{title}</h5>
                      <h5 style={{ color: "var(--mainYellow)" }}>
                        price:{" "}
                        <strong style={{ color: "#00ff00" }}>${price}</strong>
                      </h5>
                      <Link to="/ProductList">
                        <Button style={{ marginLeft: "0.5rem" }}
                        onClick={()=>closeModal()}>
                          <i class="fas fa-arrow-circle-left" /> back to
                          products
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button cart style={{ marginLeft: "0.5rem" }}
                        onClick={()=>closeModal()}>
                          <i class="fas fa-shopping-bag" /> go to cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  z-index:9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: rgba(0, 0, 0, 0.9);
    color: white;
  }
`;
//This is a component that open when you click to add to cart button to show that the product is in the 