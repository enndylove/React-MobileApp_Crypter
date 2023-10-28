import React from 'react';
import Logo from '../../image/main/logo.svg';

const Header = () => {
    return (
        <header className='header wrapper'>
            <div className='d-flex align-items-center justify-content-between'>
                <img src={Logo} alt="Logo" />
                <span className='header__burger'></span>
                <nav className='header__nav d-none'>
                    <ul className='header__ul d-flex flex-column'>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                DISCOVER
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                FEED
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link nav__link-btn">
                                connect wallet
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    );
};


export default Header