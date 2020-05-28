import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserDocument } from './firebase/firebase';
import { useDispatch } from 'react-redux';

import * as userActions from './redux/actions/user';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop";
import AuthenticationPage from './pages/authentication/authentication';
import Header from './components/header/header';


function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch(userActions.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }))
        });

      } else {
        dispatch(userActions.setCurrentUser(userAuth));
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/authentication" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
