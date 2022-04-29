import logo from './logo.svg';
import './App.css';

// Components
import Random from '../src/components/Random';
import Search from '../src/components/Search';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bible App</h1>
      </header>
        <Random />
        <Search />
    </div>
  );
}

export default App;
