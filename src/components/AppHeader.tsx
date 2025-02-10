import { useContext } from 'react';
import logo from '../assets/logo.png';
import { Book } from '../domain/book';
import { ThemeContext } from '../domain/theme';

export interface AppHeaderProps {
  books: Book[];
}

export const AppHeader = ({ books }: AppHeaderProps) => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <img src={logo} alt="Bookmonkey logo" />
      <h1
        style={{
          color: primaryColor,
        }}
      >
        Bookmonkey ({books.length})
      </h1>
    </div>
  );
};
