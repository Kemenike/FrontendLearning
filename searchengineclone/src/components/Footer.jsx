import StarsIcon from '@mui/icons-material/AutoAwesome';
import { grey } from '@mui/material/colors';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__left">
                    <a className='footer__link' 
                    target='#' 
                    href='blank'>Project Hub</a>
                    <a className='footer__link' 
                    target='#' 
                    href='https://github.com/kemenike'>GitHub</a>
                </div>
                <div className="footer__center">
                    <StarsIcon sx={{ color: grey[700], fontSize: 14}}/>
                    <p className='footer__center__para'>Cloned in 2022</p>
                </div>
                <div className="footer__right">

                </div>
            </div>
        </footer>
    );
}

export default Footer;
