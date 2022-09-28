import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/search' element={<h1>This is the search page</h1>} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
