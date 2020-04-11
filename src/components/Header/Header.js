import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, LogoContainer, Options, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils/firebase';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/selectors/index';

const Header = ({ currentUser }) => {
  const hidden = useSelector(selectCartHidden);
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
        {!hidden && <CartDropdown />}
      </Options>
    </HeaderContainer>
  );
};

export default Header;
