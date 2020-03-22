import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import { SignInContainer } from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
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

        <input type="submit" value="Submit Form" />
      </form>
    </SignInContainer>
  );
};

export default SignIn;
