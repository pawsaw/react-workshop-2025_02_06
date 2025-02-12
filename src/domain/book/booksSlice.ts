import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './Book';

export interface BooksState {
  list: Book[] | null;
}

const initialState: BooksState = {
  list: null,
};

export const booksFeatureName = 'books';

type AddBooksAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: booksFeatureName,
  initialState,
  reducers: {
    addBooks: (state: BooksState, { payload: books }: AddBooksAction) => {
      state.list = books;
    },
  },
});

export const { addBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
