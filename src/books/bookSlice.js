import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Moby-Dick",
      isbnNumber: 4484,
      authorIDs: [1],
      description:
        "The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    },
    {
      id: 2,
      title: "Moby-Dick",
      isbnNumber: 4484,
      authorIDs: [1],
      description:
        "The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    },
    {
      id: 3,
      title: "Moby-Dick",
      isbnNumber: 4484,
      authorIDs: [1],
      description:
        "The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    },
    {
      id: 4,
      title: "Moby-Dick",
      isbnNumber: 4484,
      authorIDs: [1],
      description:
        "The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the maniacal quest of Ahab, captain of the whaling ship Pequod, for vengeance against Moby Dick, the giant white sperm whale that bit off his leg on the ship's previous voyage.",
    },
  ],
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

export const { addNewBook } = bookSlice.actions;
export default bookSlice.reducer;
