import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice/bookSlice";
import authorReducer from "./authorSlice/authorSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    authors: authorReducer,
  },
});
