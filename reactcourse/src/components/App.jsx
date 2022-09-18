import Todo from "./Todo.jsx"
import Modal from "./Modal.jsx"
import Title from "./Title.jsx"
// import Counter from "./Counter.jsx"
import React, {useState} from "react";

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  // return ( <Counter />);
  /* The above is for using CounterNotes.jsx and Counter.jsx */

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => console.log(event.target.value) }/>
        <button onClick={() => setShowModal(true)}>Add To-do</button>
      </div>
    <div className="todo__wrapper">
      <Todo title="Find a Frontend Job" />
      <Todo title="Find happiness in life." />
      <Todo title="Start a family." />
    </div>
    {showModal ? <Modal /> : null}
    </div>
  );

 1:12:00

}

export default App;
