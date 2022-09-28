import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Nav from "../components/Nav";
import Users from "../pages/Users"

// import Todo from "./Todo.jsx"
// import Modal from "./Modal.jsx"
// import Title from "./Title.jsx"

// import Counter from "./Counter.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React, {useState, useEffect} from "react";

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  /* ==> For using CounterNotes.jsx and Counter.jsx */
  // return ( <Counter />);

  /* ==> For using Todo Modal Title useState and useEffect */ 

  // function onTodoDelete() {
  //   setShowModal(true);
  // }

  // function onTodoConfirm() {
  //   setShowModal(false);
  // }

  // function onTodoCancel() {
  //   setShowModal(false);
  // }

  // useEffect(() => {console.log('mount')}, [showModal]); 

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input type="text" onChange={(event) => console.log(event.target.value) }/>
  //       <button onClick={() => setShowModal(true)}>Add To-do</button>
  //     </div>
  //   <div className="todo__wrapper">
  //     <Todo onTodoDelete={onTodoDelete} title="Find a Frontend Job" />
  //     <Todo onTodoDelete={onTodoDelete} title="Find happiness in life." />
  //     <Todo onTodoDelete={onTodoDelete} title="Start a family." />
  //   </div>
  //   {showModal ? <Modal confirm={onTodoConfirm} cancel={onTodoCancel}/> : null}
  //   </div>
  // );

  return( 
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
