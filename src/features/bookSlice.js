import { createSlice } from "@reduxjs/toolkit";
import dummybooks from "../dummybooks/dummyBooks";
import books from "../dummybooks/dummyBooks";

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
   
  },
});

export const { addBook, } = bookSlice.actions;

export default bookSlice.reducer;
