import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hola, mundo, estoy aprendiendo React JS
        </p>
        <TaskListComponent></TaskListComponent> */}
        <GreetingStyled name='José'></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
