import ArrowImg from '../../../image/main/arrow.svg';
import PlaceholderImg from '../../../image/pages/home/homehero-placeholder.svg';
import HomeheroBank from '../../../image/pages/home/homehero.webp';

const HomeHero = () => {
    return (
        <section className='section'>
            <section className='section default-padding wrapper'>
                <h1 className='homehero__title font-h2'>Curated Artwork.</h1>
                <div className='homehero__arrow'>
                    <a className='homehero__arrow' href="#"><img className='homehero__arrow-img' data-src={ArrowImg} alt="" /></a>
                </div>
                <p className='homehero__info font-body2'>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.</p>
                <div className='homehero__start'>
                    <a href='#' className='homehero__start font-button'>start your search<span><img className='placeholder-img' data-src={PlaceholderImg} alt="" /></span></a>
                </div>
            </section>
            <section className='section'>
                <img className='homehero__bank-png' data-src={HomeheroBank} alt="" />
                <div className="default-padding  homehero__content">
                    <div className="homehero__info-content d-flex align-items-center m-auto">
                        <div className="homehere__info-block">
                            <h5 className="homehero__info-title font-base">
                                Collection
                            </h5>
                            <p className="homehero__info-info font-base">
                                <span style={{marginRight: 12}}><img data-src={PlaceholderImg} alt="" /></span>
                                Escape II
                            </p>
                        </div>
                        <div className="homehere__info-block">
                            <h5 className="homehero__info-title font-base">
                                Buy now
                            </h5>
                            <p className="homehero__info-info font-base">
                                <span style={{marginRight: 12}}><img data-src={PlaceholderImg} alt="" /></span>
                                10.00 ETH                            
                            </p>
                        </div>
                    </div>
                    <div className="homehero__btt">
                        <h3 className="homehero__btt-title font-h3">
                            The creator network.
                        </h3>
                        <div className="homehero__btn-block d-flex align-items-center flex-column w-100">
                            <a href="#" className="w-100 homehero__btt-btn font-button">
                                View NFT
                            </a>
                            <a href='#' className="w-100 homehero__btt-btn fill font-button">
                                place a bid
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};


export default HomeHero