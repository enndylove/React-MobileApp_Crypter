import logo from '../../image/main/logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__block">
                <div className="footer__sub">
                    <img data-src={logo} src={logo} alt="" className="footer__logo" />
                    <p className="footer__info font-body2-bold">
                        Empower your creativity.
                    </p>
                </div>
                <div className="footer__sup d-flex justify-content-between">
                    <div className="footer__content">
                        <h6 className="footer__content-title font-button color-darken">
                            CRYPTER.
                        </h6>
                        <ul className="footer__ul">
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Explorer
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Connect wallet
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Upload
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    How it work
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content">
                        <h6 className="footer__content-title font-button color-darken">
                            INFO
                        </h6>
                        <ul className="footer__ul">
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Download
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Help center
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Blog
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    Jobs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__content" style={{marginTop: `9%`}}>
                        <ul className="footer__ul">
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 16.1699C14.433 16.1699 16 14.6029 16 12.6699C16 10.7369 14.433 9.16992 12.5 9.16992C10.567 9.16992 9 10.7369 9 12.6699C9 14.6029 10.567 16.1699 12.5 16.1699Z" stroke="#686A6C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M21.5 13.1993C21.5 19.1699 19.5 21.6699 12.5 21.6699C5.5 21.6699 3.5 19.6699 3.5 12.6699C3.5 6.16992 5.5 3.66992 12.5 3.66992C20 3.66992 21.5 6.16992 21.5 13.1993Z" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17 8.16992C17.2761 8.16992 17.5 7.94606 17.5 7.66992C17.5 7.39378 17.2761 7.16992 17 7.16992C16.7239 7.16992 16.5 7.39378 16.5 7.66992C16.5 7.94606 16.7239 8.16992 17 8.16992Z" fill="#686A6C" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.6893 9.35428C19.6893 9.56778 19.6893 9.67453 19.6893 9.88803C19.6893 14.9053 15.9615 20.6699 9.14497 20.6699C7.1213 20.6699 5.09763 20.1362 3.5 18.9619C3.81953 18.9619 4.13905 19.0687 4.35207 19.0687C6.05621 19.0687 7.65385 18.5349 8.93195 17.4674C7.33432 17.4674 5.9497 16.3999 5.41716 14.7986C5.9497 14.7986 6.58876 14.7986 7.1213 14.5851C5.41716 14.2648 4.13905 12.6636 4.13905 10.9555C4.6716 11.2758 5.20414 11.3826 5.8432 11.3826C4.24556 10.315 3.71302 8.07326 4.6716 6.36524C6.58876 8.71377 9.35799 10.1015 12.3402 10.2083C12.0207 8.92727 12.4467 7.5395 13.4053 6.68549C14.8964 5.29772 17.2396 5.29772 18.6243 6.89899C19.4763 6.68549 20.2219 6.47199 20.9675 5.93823C20.6479 6.79224 20.1154 7.5395 19.3698 8.07326C20.1154 7.96651 20.8609 7.753 21.5 7.43275C20.9675 8.18001 20.3284 8.82052 19.6893 9.35428Z" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5 13.1993C21.5 19.1699 19.5 21.6699 12.5 21.6699C5.5 21.6699 3.5 19.6699 3.5 12.6699C3.5 6.16992 5.5 3.66992 12.5 3.66992C20 3.66992 21.5 6.16992 21.5 13.1993Z" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10.5 12.1699H14.5" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12.5 17.1699C12.5 17.1699 12.5 13.409 12.5 11.0395C12.5 8.66992 13 8.16992 15 8.16992" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link font-caption">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5 13.1993C21.5 19.1699 19.5 21.6699 12.5 21.6699C5.5 21.6699 3.5 19.6699 3.5 12.6699C3.5 6.16992 5.5 3.66992 12.5 3.66992C20 3.66992 21.5 6.16992 21.5 13.1993Z" stroke="#686A6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
            <p className="footer__licence font-caption">
                Copyright © 2022 UI8 LLC. All rights reserved
            </p>
        </footer>
    );
};


export default Footer