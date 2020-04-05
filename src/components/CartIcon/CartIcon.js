import React from 'react';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './style';
import { toggleCartHidden } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>0</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
