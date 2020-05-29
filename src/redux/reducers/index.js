import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import cartReducer from './cart';
import collectionsReducer from './collections';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  collections: collectionsReducer
});

export default persistReducer(persistConfig, rootReducer);