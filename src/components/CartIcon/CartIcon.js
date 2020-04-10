import React from 'react';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './style';
import { toggleCartHidden, selectItemsCount } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectItemsCount);
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
