import { SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  currentUser: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state;
  }
}