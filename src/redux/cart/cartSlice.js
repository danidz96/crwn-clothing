import { createSlice } from '@reduxjs/toolkit';

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
      state.cartItems.push(payload);
    },
  },
});

export const selectHidden = state => state.cart.hidden;

export const { toggleCartHidden } = cartSlice.actions;

export default cartSlice.reducer;
