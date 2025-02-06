import { AppHeader } from './components/AppHeader';
import { BookListItem } from './components/BookListItem';
import { exampleBooks } from './domain/book';

function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
        <BookListItem book={exampleBooks[0]} />
        <BookListItem book={exampleBooks[1]} />
        <BookListItem book={exampleBooks[2]} />
      </div>
    </>
  );
}

export default App;
