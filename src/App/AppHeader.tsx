import logo from '../assets/logo.png';
import { Book } from '../domain/book';

import { ThemeEditor } from '../components/ThemeEditor';
import { useTheme } from '../domain/theme';
import { useSelector } from 'react-redux';
import { State } from '../store';
import { countSelector } from '../domain/counter';

export interface AppHeaderProps {
  books: Book[];
}

export const AppHeader = ({ books }: AppHeaderProps) => {
  const { primaryColor } = useTheme();
  const count = useSelector<State, number>(countSelector);

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
      <ThemeEditor />
      <div>Counter: {count}</div>
    </div>
  );
};
