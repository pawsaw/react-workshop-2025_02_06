import { createBrowserRouter, redirect } from 'react-router';
import { AboutScreen } from './screens/AboutScreen';
import { BooksScreen } from './screens/BooksScreen/BooksScreen';
import { ErrorScreen } from './screens/ErrorScreen';
import { App } from './App';
import { BookDetailScreen } from './screens/BookDetailScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '',
        loader: () => redirect('books'),
      },
      {
        path: 'books/:isbn',
        element: <BookDetailScreen />,
      },
      {
        path: 'books',
        element: <BooksScreen />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
    ],
  },
]);
