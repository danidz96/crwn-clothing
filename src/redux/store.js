import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import cartSlice from './cart/cartSlice';

export default configureStore({
  reducer: { user: userSlice, cart: cartSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
