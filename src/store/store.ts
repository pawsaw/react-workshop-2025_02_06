import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../domain/counter';
import { booksReducer } from '../domain/book';

export const rootReducer = combineReducers({
  count: counterReducer,
  books: booksReducer,
});

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
