import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chart: null,
  results: null,
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setChart(state, action) {
      state.chart = action.payload;
    },
    setSearchResults(state, action) {
      state.results = action.payload;
    },
  }
});

export const { setChart, setSearchResults } = contentSlice.actions;
export default contentSlice.reducer;
