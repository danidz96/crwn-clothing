import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const selectCurrentUser = (state) => state.currentUser;

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
