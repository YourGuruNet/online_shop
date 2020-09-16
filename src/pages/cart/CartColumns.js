import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block text-yellow text-title" >
      <div className="row" style={{paddingTop: '0.5rem', fontSize: "1rem", background: 'rgba(0, 0, 0, 0.3)'}}>
        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">products</p>
        </div>

        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">name of product</p>
        </div>

        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">price</p>
        </div>

        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">quantity</p>
        </div>

        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">remove</p>
        </div>

        <div className="col-10 mx-auto col-lg-2 cart-column-position">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
// I created colons for titles in shopping cart they well not be showed in mobile view because of bootstrap class