import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = pageSlice.actions;
export default pageSlice.reducer;
