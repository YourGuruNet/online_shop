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
                  <img src={img} className="img-fluid" alt="product" />
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
                    Price:{" "}
                    <strong style={{ color: "#00ff00" }}>${price}</strong>
                  </h2>
                  {/* buttons*/}
                  <div className="row">
                    <Link to="/ProductList">
                      <Button style={{ marginInlineStart: "1rem" }}>
                        <i class="fas fa-arrow-circle-left" /> back to products
                      </Button>
                    </Link>
                    <Button
                      style={{ marginInlineStart: "1rem" }}
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCard(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to cart"}
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
