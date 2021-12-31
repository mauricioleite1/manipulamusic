import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
