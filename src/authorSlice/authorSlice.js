import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  authors: [],
};

const authorSlice = createSlice({
  name: "authors",
  initialValue,
  reducers: {
    addNewAuthor: (state, action) => {
      state.authors.push(action.payload);
    },
  },
});

export const { addNewAuthor } = authorSlice.actions;
export default authorSlice.reducer;
