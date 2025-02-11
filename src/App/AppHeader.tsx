import logo from '../assets/logo.png';
import { Book } from '../domain/book';

import { ThemeEditor } from '../components/ThemeEditor';
import { useTheme } from '../domain/theme';

export interface AppHeaderProps {
  books: Book[];
}

export const AppHeader = ({ books }: AppHeaderProps) => {
  const { primaryColor } = useTheme();

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
    </div>
  );
};
