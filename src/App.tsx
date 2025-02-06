import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { exampleBooks } from './domain/book';

function App() {
  return (
    <>
      <div className="App">
        <AppHeader books={exampleBooks} />
        <BookList books={exampleBooks} />
      </div>
    </>
  );
}

export default App;
