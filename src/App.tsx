import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { useBooks } from './domain/book/useBooks';

function App() {
  const { books, reload } = useBooks();

  return (
    <>
      <div className="App">
        <button onClick={() => reload()}>Reload</button>
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
