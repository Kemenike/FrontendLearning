import React from 'react';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input 
                type="text" 
                className="searchbar__input" 
                placeholder='Search Champions'/>
        </div>
    );
}

export default SearchBar;
