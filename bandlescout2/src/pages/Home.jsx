import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Search from './Search';

function Home () {
    let navigate = useNavigate();

    return (
        <div className='home__container'>
            <h1 className="title">
                BandleScout
            </h1>
            <div className='search__container'>
                <input type="text" className="search_bar"
                onKeyDown={(event) => event.key === "Enter" && <Search /> } placeholder='Search Champions' />
                <div className="button__container">
                    <button className="btn assassin_btn" onClick={() => navigate("/search")}>Assassins</button>
                    <button className="btn mage_btn">Mages</button>
                    <button className="btn marksman_btn">Marksmen</button>
                    <button className="btn support_btn">Supports</button>
                    <button className="btn tank_btn">Tanks</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
