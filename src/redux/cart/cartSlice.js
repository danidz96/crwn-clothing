import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: true,
  },

  reducers: {
    toggleCartHidden: state => {
      state.hidden = !state.hidden;
    },
  },
});

export const selectHidden = state => state.cart.hidden;

export const { toggleCartHidden } = cartSlice.actions;

export default cartSlice.reducer;
