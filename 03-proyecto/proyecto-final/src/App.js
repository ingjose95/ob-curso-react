// import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <GreetingStyled name='José'></GreetingStyled> */}
      <TaskListComponent></TaskListComponent>
    </div>
  );
}

export default App;
