import React from 'react';
import { useDispatch } from 'react-redux';

import * as cartActions from '../../redux/actions/cart';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(cartActions.removeItem(cartItem))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(cartActions.addItem(cartItem))}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => dispatch(cartActions.deleteItemFromCart(id))}>&#x2716;</div>
    </div>
  )
}

export default CheckoutItem;