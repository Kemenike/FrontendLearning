import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const Nav = ({ login, register, logout, user }) => {

    useEffect(() => { 
        
    }, []);

    return (
        <nav id="navbar--main">
            <div className='container'>
                <div className="menu__container">
                    <FontAwesomeIcon icon="fa-solid fa-bars"/>
                <h1 className='title'>Placeholder Title</h1>
                </div> 
                <div className="nav__links">
                    {user === {} 
                        ? <>
                            <button className="signout btn" onClick={logout}>
                                {user.email ? user.email[0].toUpperCase() : null}
                            </button>
                        </>
                        : <>
                            <button className="login btn" onClick={login}>Login</button>
                            <button className="register btn" onClick={register}>Register</button>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Nav;
