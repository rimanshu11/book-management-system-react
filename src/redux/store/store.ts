import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../slices/bookSlice.ts';
import userReducer  from '../slices/userSlice.ts';

const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
