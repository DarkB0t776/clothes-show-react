import {
  TOGGLE_CART,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../types'

import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';


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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.item)
      }
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
}