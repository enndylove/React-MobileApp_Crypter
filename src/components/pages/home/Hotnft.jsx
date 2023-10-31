import HotNftArrow from '../../../image/main/hotnftarrow.svg'
import BioNFTblock from '../../UI/home/Bionftblock'

const HotNFT = () => {
    return (
        <section className='section hotnft'>
            <div className="hotnft__text default-padding">
                <h3 className="hotnft__title font-h3">
                    Hot NFT artists of the month.
                </h3>
                <div className="hotnft__arrow-link d-flex">
                    <a href="#" className="">
                        <img className='' src={HotNftArrow} alt="" />
                    </a>                    
                </div>

                <p className="hotnft__info font-body2">
                    We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                </p>
            </div>
            <BioNFTblock/>
            <div className="hotnft__btn font-button">
                <a href="#" className="">
                    EXPLORE MORE
                </a>                
            </div>

        </section>
    );
};


export default HotNFT