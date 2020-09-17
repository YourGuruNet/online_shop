import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
export default function EmptyCart() {
  return (
      <React.Fragment>
    <div className="container mt-5 full-page">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-yellow">
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
    <Link to="/ProductList">
    <Button style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
      <i class="fas fa-arrow-circle-left" /> back to products
    </Button>
  </Link>
  </React.Fragment>
  );
}
