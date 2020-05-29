import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { PersistGate } from 'redux-persist/integration/react';

import logger from 'redux-logger';
import rootReducer from './redux/reducers';


const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

