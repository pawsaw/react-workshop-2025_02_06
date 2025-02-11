import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { useBooks } from './domain/book/useBooks';
import { ThemeProvider } from './domain/theme';

function App() {
  const { books } = useBooks();

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
