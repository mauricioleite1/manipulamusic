import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'ptBR',
  favorites: null,
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    addFavorite(state, action) {
      state.favorites = action.payload;
    }
  },
});

export const { setLanguage, addFavorite } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
