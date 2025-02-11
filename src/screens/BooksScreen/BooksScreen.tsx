import { useContextBooks } from '../../domain/book';
import { BookList } from './BookList';

export const BooksScreen = () => {
  const { books } = useContextBooks();

  return (
    <div className="books-screen">
      {books ? (
        <>
          <BookList books={books} />
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
