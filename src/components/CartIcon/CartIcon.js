import React from 'react';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './style';
import { toggleCartHidden } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/selectors/index';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);
  return (
    <CartContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
