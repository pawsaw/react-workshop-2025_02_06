import { createBrowserRouter, redirect } from 'react-router';
import { AboutScreen } from './screens/AboutScreen';
import { BooksScreen } from './screens/BooksScreen/BooksScreen';
import { ErrorScreen } from './screens/ErrorScreen';
import { App } from './App';

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
