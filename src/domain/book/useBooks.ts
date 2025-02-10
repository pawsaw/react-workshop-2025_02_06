import { useState, useEffect, useCallback } from 'react';
import { fetchBooks } from './api';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  loading: boolean;
  reload: () => Promise<void>;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const reload = useCallback(async () => {
    setBooks(null);
    const _books = await fetchBooks();
    setBooks(_books);
  }, []);
  useEffect(() => {
    reload();
  }, [reload]);

  return {
    books,
    loading: books === null,
    reload,
  };
};
