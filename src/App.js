import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserDocument } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from './redux/actions/user';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop";
import AuthenticationPage from './pages/authentication/authentication';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header';


const App = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

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
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/authentication"
          render={() => currentUser ? <Redirect to="/" /> : <AuthenticationPage />}
        />
      </Switch>
    </div>
  );
}

export default App;
