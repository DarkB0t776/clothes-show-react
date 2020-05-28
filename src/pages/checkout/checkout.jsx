import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './checkout.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item'

const CheckoutPage = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const cartTotal = useSelector(state => {
    return state.cart.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
  })

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
