import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hola, mundo, estoy aprendiendo React JS</h2>
        <h3 className="subtitulo">Librería de JavaScript</h3>
        <a
          className="App-link"
          href="https://twitter.com/Jose95M"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Jose95M
        </a>
      </header>
    </div>
  );
}

export default App;
