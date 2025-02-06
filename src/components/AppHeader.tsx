import logo from '../assets/logo.png';
import { Book } from '../domain/book';

export interface AppHeaderProps {
  books: Book[];
}

export const AppHeader = ({ books }: AppHeaderProps) => (
  <div className="app-header">
    <img src={logo} alt="Bookmonkey logo" />
    <h1>Bookmonkey ({books.length})</h1>
  </div>
);
