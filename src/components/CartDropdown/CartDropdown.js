import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSlice';
import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
} from './style';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.map(cartItem => (
          <CartItem item={cartItem} />
        ))}
      </CartItemsContainer>
      <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
