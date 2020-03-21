import React from 'react';
import { Wrapper, LogoContainer, Options, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <Options>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        <OptionLink as="div">SIGN OUT</OptionLink>
        <OptionLink to="/signin">SIGN IN</OptionLink>
      </Options>
    </Wrapper>
  );
};

export default Header;
