import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { useBooks } from './domain/book/useBooks';
import { usePolling } from './domain/common/usePolling';

function App() {
  const { books, reload } = useBooks();

  usePolling(reload);

  return (
    <>
      <div className="App">
        {books ? (
          <>
            <AppHeader books={books} />
            <BookList books={books} />
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </>
  );
}

export default App;
