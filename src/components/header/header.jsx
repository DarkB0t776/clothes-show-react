import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = () => {

  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>
        {
          currentUser
            ?
            <span
              className="option"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
          </span>
            :
            <Link
              className="option"
              to="/authentication"
            >
              SIGN IN
          </Link>
        }
      </div>
    </div>
  );
}


export default Header;
