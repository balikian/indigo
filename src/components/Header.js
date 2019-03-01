import React from 'react';

const Header = () => (
    <header className='header'>
        <img src='images/logo.svg' className='header__img-logo' />
        <button className='header__button-menu' onClick={(e) => {
            document.querySelector('.header__button-menu').classList.toggle('open');
            document.querySelector('.mainNav').classList.toggle('open');
        }}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    </header>
);

export default Header;


