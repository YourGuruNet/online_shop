import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div
      className="row my-2 text-capitalize text-center text-bright cart-item-hover"
      style={{
        borderBottom: "solid 0.01rem rgba(255, 187, 51, 0.293)",
        padding: "0.2rem",
      }}
    >
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 cart-position">
        <span className="d-lg-none">Product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 cart-position">
        <span className="d-lg-none">Price:</span>${price}
      </div>
      {/*Buttons */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 cart-position">
        <div className="d-flex justify-content-center ">
          <div className="text-yellow">
            <span
              className="mx-1 btn-cart"
              onClick={() => {
                decrement(id);
              }}
            >
              <i class="fas fa-minus-square" />
            </span>
            <span
              className="mx-1 btn-cart"
              onClick={() => {
                decrement(id);
              }}
            >
              {count}
            </span>
            <span
              className="mx-1 btn-cart"
              onClick={() => {
                increment(id);
              }}
            >
              <i class="fas fa-plus-square" />
            </span>
          </div>
        </div>
      </div>
      {/*Buttons */}
      {/*Remove button*/}
      <div className="col-10 mx-auto col-lg-2 cart-position">
        <span
          className="mx-1 btn-cart"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i class="fas fa-window-close" style={{ color: "red" }} />
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 cart-position">
        <strong>
          {" "}
          <span className="d-lg-none">item total: </span>${total}
        </strong>
      </div>
    </div>
  );
}
//d-lg-none says that its well not be showed on big screen
//I made 2 const and import values of my products plus all functions i created for cart page in Context.js

