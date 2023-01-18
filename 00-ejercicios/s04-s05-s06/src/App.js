import logo from './logo.svg';
import './App.css';
// import Clock from './components/container/ClassComponent';
import ClockFunction from './components/container/FunctionComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Ejercicio de las secciones:</h1>
        <h2>Seciones: 04,05 y 06</h2>
        {/* <Clock></Clock> */}
        <ClockFunction></ClockFunction> 
      </header>
    </div>
  );
}

export default App;
