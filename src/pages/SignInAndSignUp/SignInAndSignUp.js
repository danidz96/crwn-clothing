import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import { SignInAndSignUpContainer } from './styles';

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
