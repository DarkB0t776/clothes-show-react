
import {
  TOGGLE_CART,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART })

export const addItem = item => ({
  type: ADD_ITEM_TO_CART,
  item
})

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

export const deleteItemFromCart = (itemId) => ({
  type: DELETE_ITEM_FROM_CART,
  id: itemId
})
