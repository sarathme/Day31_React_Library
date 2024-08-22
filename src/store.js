import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./books/bookSlice";
import authorReducer from "./authors/authorSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    authors: authorReducer,
  },
});
