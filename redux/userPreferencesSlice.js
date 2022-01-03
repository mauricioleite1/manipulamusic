import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'ptBR',
  favorites: [],
}

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    }
  },
});

export const { setLanguage, setFavorites } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;
