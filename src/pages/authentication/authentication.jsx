import React from 'react';

import './authentication.scss'
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const AuthenticationPage = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
)

export default AuthenticationPage;
