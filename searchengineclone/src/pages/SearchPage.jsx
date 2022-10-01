import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = UseGoogleSearch(term);

    console.log(data); 
    
    return (
        <div className='search_page'>
            <div className="search_page__header">
                <h1>{term}</h1>
            </div>
            <div className="search_page__results">

            </div>
        </div>
    );
}

export default SearchPage;