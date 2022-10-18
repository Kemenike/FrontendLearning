import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Search.css';

const Search = () => {
    let navigate = useNavigate();
    
    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <Navbar />
        </div>
    );
}

export default Search;
