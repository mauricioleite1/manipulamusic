import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '../contentSlice';
import userPreferencesReducer from '../userPreferencesSlice';
import pageReducer from '../pageSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    userPreferences: userPreferencesReducer,
    page: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
