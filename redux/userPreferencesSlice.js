import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'en',
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
