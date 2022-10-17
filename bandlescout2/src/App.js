import "./App.css";
import React from "react";
import Search from './pages/Search';
import Home from './pages/Home';
import ChampionInfo from './pages/ChampionInfo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/search' element={<Search />} />
          <Route path='/champion/:id' element={<ChampionInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
