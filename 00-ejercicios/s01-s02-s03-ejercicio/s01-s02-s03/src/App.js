import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/container/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tarea de las secciones: 1,2,3</h2>
        <h3>Este es un componente de Clase:</h3>
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
