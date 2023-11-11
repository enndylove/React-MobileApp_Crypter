import { Animated } from 'react-animated-css'
import HotNftArrow from '../../../image/main/hotnftarrow.svg'
import BioNFTblock from '../../UI/pages/home/Bionftblock'

const HotNFT = () => {
    return (
        <section className='section hotnft'>
            <div className="hotnft__text default-padding">
                <Animated className='wow' animationIn="fadeInUp" isVisible={true} animationInDuration={1000}>
                    <h3 className="hotnft__title font-h3">
                        Hot NFT artists of the month.
                    </h3>                    
                </Animated>

                <div className="hotnft__arrow-link d-flex">
                    <Animated className='wow' animationIn="fadeInLeft" isVisible={true} animationInDuration={1000}>
                        <a href="#" className="">
                            <img className='' data-src={HotNftArrow} alt="" />
                        </a> 
                    </Animated>
                </div>
                <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <p className="hotnft__info font-body2">
                        We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.
                    </p>                    
                </Animated>
            </div>
            <BioNFTblock />
            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <div className="hotnft__btn font-button">
                    <a href="#" className="">
                        EXPLORE MORE
                    </a>                
                </div>                
            </Animated>


        </section>
    );
};


export default HotNFT