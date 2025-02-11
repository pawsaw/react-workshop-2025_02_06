import { BookList } from '../components/BookList';
import { useContextBooks } from '../domain/book';

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
