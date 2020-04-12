import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './utils/cart';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: true,
    cartItems: [],
  },

  reducers: {
    toggleCartHidden: state => {
      state.hidden = !state.hidden;
    },
    addItem: (state, { payload }) => {
      state.cartItems = addItemToCart(state.cartItems, payload);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = removeItemFromCart(state.cartItems, payload);
    },
    clearItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== payload.id
      );
    },
  },
});

export const {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;
