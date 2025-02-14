import { CSSProperties, useState } from 'react';
import { LikeCounter } from './LikeCounter';
import { Book } from '../../../../domain/book';
import { Link } from 'react-router';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const [numLikes, setNumLikes] = useState(0);
  return (
    <div className="book-list-item">
      <div style={styles.headerBar}>
        {numLikes > 4 && <span>⭐️</span>}
        <h2>{book.title}</h2>
        <LikeCounter numLikes={numLikes} onNumLikesChanged={(numLikes) => setNumLikes(numLikes)} />
      </div>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <Link to={`/books/${book.isbn}`}>Details</Link>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  headerBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
};
