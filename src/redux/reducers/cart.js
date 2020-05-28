import {
  TOGGLE_CART,
  ADD_ITEM_TO_CART
} from '../types'

import { addItemToCart } from '../utils/cartUtils';


const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      };
    default:
      return state;
  }
}