import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import styled from "styled-components";
//Function based component
export default function CartTotals({ value }) {
  const { cartSubTotal, CartTax, CartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-19 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/ProductList">
              <Button style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
                <i class="fas fa-arrow-circle-left" /> back to products
              </Button>
            </Link>
              <ButtonClear  style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }} onClick={() => clearCart()}>
              <i class="fas fa-trash-alt"/> clear cart
              </ButtonClear >
             <h5>
             <span className="text-cart">subtotal: </span>
             <strong className="text-cart">{cartSubTotal} $</strong>
             </h5>
             <h5>
             <span className="text-cart">Tax 21%: </span>
             <strong className="text-cart">{CartTax} $</strong>
             </h5>
             <h5>
             <span className="text-cart">Total: </span>
             <strong className="text-cart">{CartTotal} $</strong>
             </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

 const ButtonClear = styled.button`
  padding: 0.3rem;
  text-transform: capitalize;
  font-size: 1rem;
  border: 0.05rem solid red;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: red;
    color: white;
  &:hover {
    background: transparent;
    color: red;
  }
  &:focus {
    outline: none;
  }
`;