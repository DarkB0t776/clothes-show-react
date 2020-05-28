import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as cartActions from '../../redux/actions/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartItem = () => {

  const dispatch = useDispatch();
  const itemCount = useSelector(state => {
    return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  });

  return (
    <div className="cart-icon" onClick={() => dispatch(cartActions.toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartItem;