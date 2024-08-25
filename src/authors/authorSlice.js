import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [
    {
      id: "1",
      authorName: "George Orwell",
      birthDate: "1903-06-25",
      shortBio:
        "George Orwell, born Eric Arthur Blair, was a British writer, journalist, and essayist known for his critical views on totalitarianism, social injustice, and the misuse of political power. His most famous works include the dystopian novels 1984 and Animal Farm, which explore themes of surveillance, oppression, and propaganda.",
    },
    {
      id: "2",
      authorName: "George Orwell Jr.",
      birthDate: "1903-06-25",
      shortBio:
        "George Orwell, born Eric Arthur Blair, was a British writer, journalist, and essayist known for his critical views on totalitarianism, social injustice, and the misuse of political power. His most famous works include the dystopian novels 1984 and Animal Farm, which explore themes of surveillance, oppression, and propaganda.",
    },
    {
      id: "3",
      authorName: "K George Orwell Jr.",
      birthDate: "1903-06-25",
      shortBio:
        "George Orwell, born Eric Arthur Blair, was a British writer, journalist, and essayist known for his critical views on totalitarianism, social injustice, and the misuse of political power. His most famous works include the dystopian novels 1984 and Animal Farm, which explore themes of surveillance, oppression, and propaganda.",
    },
  ],
};

const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    addNewAuthor: (state = {}, action) => {
      state.authors.push(action.payload);
    },
    deleteAuthor: (state = {}, action) => {
      state.authors = state.authors.filter(
        (author) => author.id !== action.payload
      );
    },
    updateAuthor: (state = {}, action) => {
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
