/* Redux. */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeColor: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeColor: (state) => {
      console.log("Theme: " + state.themeColor);
      state.themeColor === 'light' 
        ? state.themeColor = 'dark' 
        : state.themeColor = 'light';
    },
  },
});

export const { setThemeColor } = themeSlice.actions;

export default themeSlice.reducer;