import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "1984",
      isbnNumber: "978-0451524935",
      publishedDate: "June 8, 1949",
      authorIDs: [1, 2, 3],
      description:
        "1984 is a dystopian novel set in a totalitarian society controlled by the Party and its leader, Big Brother. The story follows Winston Smith, a man struggling against oppressive government control, surveillance, and propaganda, exploring themes of freedom, truth, and individuality.",
    },
    {
      id: 2,
      title: "Animal Farm",
      isbnNumber: "978-0451526342",
      authorIDs: [1],
      publishedDate: "August 17, 1945",
      description:
        "Animal Farm is a political allegory that satirizes the Russian Revolution and the rise of Stalinism. The novella tells the story of a group of farm animals who overthrow their human owner and attempt to establish an egalitarian society, only to see it descend into tyranny.",
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
