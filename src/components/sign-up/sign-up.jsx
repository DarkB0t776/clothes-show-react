import React, { useState, useCallback } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './sign-up.scss';

import { auth, createUserDocument } from '../../firebase/firebase';

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const submitHandler = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userInput;

    if (password !== confirmPassword) {
      alert('passwords don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user, { displayName });

      setUserInput({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.log(err);
    }
  }

  const changeHandler = useCallback(event => {
    const { name, value } = event.target;

    setUserInput(prevState => ({
      ...prevState,
      [name]: value
    }))

  }, [userInput]);


  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          changeHandler={changeHandler}
          value={userInput.displayName}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          changeHandler={changeHandler}
          value={userInput.email}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={userInput.password}
          changeHandler={changeHandler}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={userInput.confirmPassword}
          onChange={changeHandler}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;