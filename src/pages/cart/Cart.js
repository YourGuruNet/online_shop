import React, { Component } from "react";
import ProductTitle from "../../components/ProductTitle";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from './CartList';
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <ProductTitle name="Shopping" title="cart" />
                  <div style={{background:'rgba(0, 0, 0, 0.3)', marginBottom: '2rem' }}>
                  <CartColumns />
                  <CartList value={value}/>
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
// I made tri components Title, columns,
// and empty cart and also function with will 
//show empty cart is cart.length is 0 other way you see Title and columns.