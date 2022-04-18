import React from 'react';
import './Footer.css';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='d-flex justify-content-center align-items-center'>
            <p className=''><small>copyrigth &#169; Ash-Shifa Hijama Services | {year}</small></p>
        </footer>
    );
};

export default Footer;