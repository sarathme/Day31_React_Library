import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

console.log(bookSlice);
console.log(bookSlice.getInitialState());
export const { addNewBook } = bookSlice.actions;
export default bookSlice.reducer;
