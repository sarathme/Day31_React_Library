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
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    removeAuthor: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.authorIDs.includes(action.payload)) {
          book.authorIDs = book.authorIDs.filter(
            (authorId) => authorId !== action.payload
          );
        }
        return book;
      });
    },
    deleteMultipleBooks: (state, action) => {
      state.books = state.books.filter(
        (book) => !action.payload.includes(book.id)
      );
    },
    updateBook: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });
    },
  },
});

export const {
  addNewBook,
  deleteBook,
  updateBook,
  deleteMultipleBooks,
  removeAuthor,
} = bookSlice.actions;
export default bookSlice.reducer;
