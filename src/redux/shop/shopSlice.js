import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from './data';

const INITIAL_STORE = {
  collections: SHOP_DATA,
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState: INITIAL_STORE,

  reducers: {
    updateCollections: (state, { payload }) => {
      state.collections = payload;
    },
  },
});

export const { updateCollections } = shopSlice.actions;

export default shopSlice.reducer;
