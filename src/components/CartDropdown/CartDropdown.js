import React from 'react';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './style';

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer></CartItemsContainer>
      <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
