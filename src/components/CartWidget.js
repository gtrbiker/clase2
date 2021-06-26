import React from 'react';
import cart from '../assets/cart.png';

export const CartWidget = () => {
    return (
        <div>
            <img src={cart} className="cart" alt="imagen carrito" />
        </div>
    )
}
