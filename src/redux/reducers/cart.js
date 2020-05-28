import { TOGGLE_CART } from '../types'

const INITIAL_STATE = {
  hidden: true
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
}