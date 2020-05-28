import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const isCartHidden = useSelector(state => state.cart.hidden);

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
        <CartIcon />
      </div>
      {
        isCartHidden ? null : <CartDropdown />
      }
    </div>
  );
}


export default Header;
