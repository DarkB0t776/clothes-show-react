import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as cartActions from '../../redux/actions/cart';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = ({ history }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const moveToChackeoutHandler = () => {
    history.push('/checkout');
    dispatch(cartActions.toggleCartHidden());
  }


  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
            ?
            cartItems.map(carItem => (
              <CartItem key={carItem.id} item={carItem} />
            ))
            :
            <span className="empty-message">Cart Is Empty</span>
        }
      </div>
      <CustomButton onClick={moveToChackeoutHandler}>Go to checkout</CustomButton>
    </div>
  )
}

export default withRouter(CartDropdown);