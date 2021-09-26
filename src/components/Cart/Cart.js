import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const member of cart){
        total = total + member.balance;
    }

    let name = '';
    for(const member of cart){
        name = name + member.name;
    }
    return (
        <div className="cart-area">
            <h2>salary Summary</h2>
            <h2>Items members: {props.cart.length}</h2>
            <p>Total Balance: $ {total}</p>
            <p>{name}</p>
            <button className="button-regular">BUY NOW</button>
            
        </div>
    );
};

export default Cart;