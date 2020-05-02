import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STORE = {
  collections: null,
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
