import logo from './logo.svg';
import './App.css';
// import ComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aprendiendo a usar React: Hooks</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h2>Uso de useState() en React JS:</h2> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <h1>Ejemplo de useState() y useContext()</h1>
        <ComponenteConContexto></ComponenteConContexto> */}
        <Ejemplo4 nombre='José'>
          <h3>
            Contenido de props.children
          </h3>

        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
