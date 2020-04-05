import React from 'react';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './style';

const CartIcon = () => {
  return (
    <CartContainer>
      <ShoppingIcon />
      <ItemCountContainer>0</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
