import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop";
import AuthenticationPage from './pages/authentication/authentication';
import Header from './components/header/header';

import { auth, createUserDocument } from './firebase/firebase';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/authentication" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
