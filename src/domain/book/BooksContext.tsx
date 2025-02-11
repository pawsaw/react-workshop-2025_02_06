import React, { useContext } from 'react';
import { useBooks, UseBooksResult } from './useBooks';

const BooksContext = React.createContext<UseBooksResult>({
  books: null,
  loading: true,
  reload: async () => {},
});

export interface BooksProviderProps {
  children: React.ReactNode;
}

export const BooksProvider = ({ children }: BooksProviderProps) => {
  const useBooksResult = useBooks();

  return <BooksContext.Provider value={useBooksResult}>{children}</BooksContext.Provider>;
};

export const useContextBooks = () => useContext(BooksContext);
