import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className="logo">
                BS
            </h1>
            <input 
                type="text"
                placeholder='Search Champions'
                />
        </div>
    );
}

export default Navbar;
