import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [],
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addNewAuthor: (state, action) => {
      state.authors.push(action.payload);
    },
    deleteAuthor: (state, action) => {
      state.authors = state.authors.filter(
        (author) => author.id !== action.payload
      );
    },
    updateAuthor: (state, action) => {
      state.authors = state.authors.map((author) => {
        if (author.id === action.payload.id) {
          return action.payload;
        }
        return author;
      });
    },
  },
});

export const { addNewAuthor, deleteAuthor, updateAuthor } = authorSlice.actions;
export default authorSlice.reducer;
