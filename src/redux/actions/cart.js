
import {
  TOGGLE_CART,
  ADD_ITEM_TO_CART
} from '../types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART })

export const addItem = item => ({
  type: ADD_ITEM_TO_CART,
  item
})