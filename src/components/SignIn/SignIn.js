import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import { SignInContainer, ButtonsBarContainer, SignInTitle } from './styles';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/utils/firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={event => setEmail(event.target.value)}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          handleChange={event => setPassword(event.target.value)}
          value={password}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton
            onClick={e => {
              e.preventDefault();
              signInWithGoogle();
            }}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
