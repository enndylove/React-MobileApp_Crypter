import React from 'react';
import Logo from '../../image/main/logo.svg';

const Header = () => {
    return (
        <header className='header wrapper position-relative'>
            <div className='d-flex align-items-center justify-content-between'>
                <img className='header__logo' data-src={Logo} alt="Logo" />
                <nav className='header__nav position-absolute d-none'>
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
                <span className='header__burger'></span>
            </div>
        </header>

    );
};

export default Header