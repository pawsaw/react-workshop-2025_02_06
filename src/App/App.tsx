import { Outlet } from 'react-router';
import { ThemeProvider } from '../domain/theme';
import { AppHeader } from './AppHeader';
import { BooksProvider, useContextBooks } from '../domain/book';
import { Navbar } from './Navbar';
import { Provider } from 'react-redux';
import { store } from '../store';

const AppHeaderWithBooks = () => {
  const { books } = useContextBooks();
  return <AppHeader books={books ?? []} />;
};

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BooksProvider>
          <div className="App">
            <AppHeaderWithBooks />
            <Navbar />
            <Outlet />
          </div>
        </BooksProvider>
      </ThemeProvider>
    </Provider>
  );
}
