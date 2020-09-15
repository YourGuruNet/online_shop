import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })} 
        </div>
    )
}
// function takes all item who are in cart and return <CartItem /> 
//I set key attribute so we can know what product to show.