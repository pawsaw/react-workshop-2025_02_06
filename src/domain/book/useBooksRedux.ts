import { useDispatch, useSelector } from 'react-redux';
import { Book } from './Book';
import { State } from '../../store';
import { fetchBooks } from './api';
import { addBooks } from './booksSlice';
import { useCallback, useEffect } from 'react';

export interface UseBooksReduxResult {
  books: Book[] | null;
  reload: () => Promise<void>;
  loading: boolean;
}

export const useBooksRedux = (): UseBooksReduxResult => {
  const books = useSelector<State, Book[] | null>((state) => state.books.list);
  const dispatch = useDispatch();

  const reload = useCallback(async () => {
    if (!books) {
      fetchBooks().then((books) => dispatch(addBooks(books)));
    }
  }, [books, dispatch]);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    books,
    reload,
    loading: books === null,
  };
};
