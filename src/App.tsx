import { Outlet } from 'react-router';
import { ThemeProvider } from './domain/theme';
import { AppHeader } from './components/AppHeader';
import { BooksProvider, useContextBooks } from './domain/book';

const AppHeaderWithBooks = () => {
  const { books } = useContextBooks();
  return <AppHeader books={books ?? []} />;
};

function App() {
  return (
    <ThemeProvider>
      <BooksProvider>
        <div className="App">
          <AppHeaderWithBooks />
          <Outlet />
        </div>
      </BooksProvider>
    </ThemeProvider>
  );
}

export default App;
