import React from 'react';
import { useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(carItem => (
            <CartItem key={carItem.id} item={carItem} />
          ))
        }
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;