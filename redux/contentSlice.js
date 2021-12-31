import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chart: [],
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setChart(state, action) {
      state.chart = action.payload;
    },
  }
});

export const { setChart } = contentSlice.actions;
export default contentSlice.reducer;
