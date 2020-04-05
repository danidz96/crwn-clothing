import React from 'react';
import { HeaderContainer, LogoContainer, Options, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils/firebase';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({ currentUser }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <Options>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </Options>
    </HeaderContainer>
  );
};

export default Header;
