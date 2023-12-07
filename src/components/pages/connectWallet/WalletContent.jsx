import logo from '../../../image/main/logo.svg';
import whiteArrow from '../../../image/main/white_arrow.svg';


const WalletContent = () => {
    return (
        <section className='section wallet default-padding position-relative'>
            <a href="/">
                <img className='wallet__logo' src={logo} alt="" />                    
            </a>
            <div className="wallet__text-content">
                <h3 className="wallet__title font-h3 color-darken">
                    Connect wallet.
                </h3>
                <img src={whiteArrow} data-src={whiteArrow} alt="" className="wallet__arrow" />
                <p className="wallet__info font-body2 color-darken" style={{fontWeight: 'bold'}}>
                    Choose how you want to connect. There are several wallet providers.
                </p>
            </div>
            <div className="wallet__back" onClick={() => window.history.back()}>

            </div>
        </section>

    );
};


export default WalletContent