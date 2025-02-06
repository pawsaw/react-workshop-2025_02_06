import { AppHeader } from './components/AppHeader';

function App() {
  const loading = true;

  return (
    <>
      <div className="App">
        <AppHeader />
        {loading && <div>Loading...</div>}
      </div>
    </>
  );
}

export default App;
