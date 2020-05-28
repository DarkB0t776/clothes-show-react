import React from 'react';
import { useDispatch } from 'react-redux';

import * as cartActions from '../../redux/actions/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartItem = () => {

  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(cartActions.toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartItem;