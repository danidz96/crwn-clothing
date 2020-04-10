import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './utils/cart';

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
  },
});

export const selectHidden = state => state.cart.hidden;

export const { toggleCartHidden, addItem } = cartSlice.actions;

export default cartSlice.reducer;
