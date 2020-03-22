import React from 'react';
import { HeaderContainer, LogoContainer, Options, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <Options>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        <OptionLink as="div">SIGN OUT</OptionLink>
        <OptionLink to="/signin">SIGN IN</OptionLink>
      </Options>
    </HeaderContainer>
  );
};

export default Header;
