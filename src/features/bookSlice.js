import { createSlice } from "@reduxjs/toolkit";
import dummybook from "../dummybooks/dummyBooks";
import books from "../dummybooks/dummyBooks";
 localStorage.setItem("books", JSON.stringify(dummybook));
const dummybooks = JSON.parse(localStorage.getItem("books"));

const initialState = {
  books: dummybooks,
  value: 0,
};
console.log("all", books);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
    deletebook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      console.log(state.books);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { addBook, deletebook } = bookSlice.actions;

export default bookSlice.reducer;
