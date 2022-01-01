import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chart: null,
  genre: null,
  results: null,
  artistsByGenre: null,
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setChart(state, action) {
      state.chart = action.payload;
    },
    setGenreList(state, action) {
      state.genre = action.payload;
    },
    setSearchResults(state, action) {
      state.results = action.payload;
    },
    setArtistsByGenre(state, action) {
      state.artistsByGenre = action.payload;
    },
  },
});

export const { setChart, setGenreList, setSearchResults, setArtistsByGenre } = contentSlice.actions;
export default contentSlice.reducer;
