import { Link, useParams } from 'react-router';
import { useBooksRedux } from '../domain/book';
import { useMemo } from 'react';

export const BookDetailScreen = () => {
  const { isbn } = useParams<{ isbn: string }>();

  // const { books } = useContextBooks();
  const { books } = useBooksRedux();
  const book = useMemo(() => books?.find((book) => book.isbn === isbn), [isbn, books]);

  return (
    <div className="book-detail-screen">
      <h2>Book Detail: {isbn}</h2>
      <p>{book?.title}</p>
      <Link to="..">Go to Books</Link>
    </div>
  );
};
