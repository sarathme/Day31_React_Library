import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialValue,
  reducers: {
    addNewBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addNewBook } = bookSlice.actions;
export default bookSlice.reducer;
