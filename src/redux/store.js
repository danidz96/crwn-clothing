import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';

export default configureStore({
  reducer: userSlice,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
