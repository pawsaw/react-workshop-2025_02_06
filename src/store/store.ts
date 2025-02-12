import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '../domain/counter';

export const rootReducer = combineReducers({
  count: counterReducer,
  books: (state = []) => state,
});

export type State = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
