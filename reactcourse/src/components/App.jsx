import Todo from "./Todo.jsx"
import './App.css';


function App() {
  return (
    <div className="todo__wrapper">
      <Todo title="Find a Frontend Job" para="Shouldn't be too hard with these skills."/>
      <Todo title="Find happiness in life." para="Only fun times ahead..."/>
      <Todo title="Start a family." para="Some dogs and cats should do... maybe a kid or two."/>
    </div>
  );
}

export default App;
