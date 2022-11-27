import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    for(const product of cart){
        total = parseInt(total) + parseInt(product.p_price);
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + parseInt(40) + tax;


    return (
        <div>
        <h4>Order Summary</h4>
        <p>Selected Items:{cart.length}</p>
        <p>Total Price:{total}Tk</p>
        <p>Total Shipping:40 Tk </p>
        <p>Tax:{tax}</p>
        <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;