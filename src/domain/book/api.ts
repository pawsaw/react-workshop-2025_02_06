import { Book } from './Book';

export const fetchBooks = async (): Promise<Book[]> => {
  const respose = await fetch('http://localhost:4730/books');
  return respose.json();
};
