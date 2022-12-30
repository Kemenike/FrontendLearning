import "./App.css";
import React from "react";
import Home from './pages/Home';
import ChampionInfo from './pages/ChampionInfo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";

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
