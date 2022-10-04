import React from 'react';
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { blue } from '@mui/material/colors'


const SearchPage = () => {
    const [{ term }, dispatch] = useStateValue();
    //Live API Call
    const { data } = useGoogleSearch(term);

    //Local File - Mock API call for testing
    // const data = Response;
    console.log('data = ', data);
    
    return (
        <div className='search_page'>
            <div className="search_page__header">
                <Link to='/'>
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" className="search_page__logo" />
                </Link>
                <div className="search_page__header__body">
                    <Search hideButtons />
                    <div className="search_page__options">
                        <div className="search_page__optionsLeft">
                            <div className="search_page__option">
                                <SearchIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>All</Link>
                            </div>
                            <div className="search_page__option">
                                <DescriptionIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>News</Link>
                            </div>
                            <div className="search_page__option">
                                <ImageIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>Images</Link>
                            </div>
                            <div className="search_page__option">
                                <LocalOfferIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>Shopping</Link>
                            </div>
                            <div className="search_page__option">
                                <RoomIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>Maps</Link>
                            </div>
                            <div className="search_page__option">
                                <MoreVertIcon sx={{fontSize: 16, color: blue[500]}}/>
                                <Link>More</Link>
                            </div>

                        </div>
                        <div className="search_page__optionsRight">
                            <Link to="/settings">Settings</Link>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
            {term && (
                <div className="search_page__results">
                    <p className="search_page__result_count">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='search_page__result'>
                            <a href={item.link} className="search_page__result__title__container">
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="search_page__result__img"
                                    src={
                                        item.pagemap?.cse_image[0]?.src
                                        }
                                    alt="" />
                                )}
                                {item.displayLink} 
                                <MoreVertIcon sx={{width: 18, height: 18}} />
                            </a>
                            <a className='search_page__result__title' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="search_page__results__snippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;