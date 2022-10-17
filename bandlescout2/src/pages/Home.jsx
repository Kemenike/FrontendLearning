import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home () {
    let navigate = useNavigate();

    return (
        <div className='home__container'>
            <h1 className="title">
                BandleScout
            </h1>
            <div className='search__container'>
                <input type="text" className="search_bar" placeholder='Search Champions' />
                <div className="button__container">
                    <button className="btn assassin_btn" onClick={() => navigate("/search")}>Assassin</button>
                    <button className="btn mage_btn">Mage</button>
                    <button className="btn marksman_btn">Marksman</button>
                    <button className="btn support_btn">Support</button>
                    <button className="btn tank_btn">Tank</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
