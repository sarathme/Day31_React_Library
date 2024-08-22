import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [],
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addNewAuthor: (state = {}, action) => {
      state.authors.push(action.payload);
    },
  },
});

export const { addNewAuthor } = authorSlice.actions;
export default authorSlice.reducer;
