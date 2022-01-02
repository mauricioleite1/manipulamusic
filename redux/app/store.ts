import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice';
import userPreferencesReducer from '../userPreferencesSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    userPreferences: userPreferencesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
