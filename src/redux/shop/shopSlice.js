import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCollectionsFromFirebase } from './utils';

const INITIAL_STORE = {
  collections: {},
  isLoading: false,
  error: '',
};

export const fetchCollections = createAsyncThunk(
  'shop/fetchingCollections',
  async () => {
    const collections = await fetchCollectionsFromFirebase();
    return collections;
  }
);

export const shopSlice = createSlice({
  name: 'shop',
  initialState: INITIAL_STORE,

  reducers: {},

  extraReducers: {
    [fetchCollections.pending]: state => {
      state.isLoading = true;
    },
    [fetchCollections.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchCollections.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default shopSlice.reducer;
