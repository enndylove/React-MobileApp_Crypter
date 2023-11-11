import { Animated } from 'react-animated-css';
import ImageFeatured3d from '../../../image/pages/home/featured3d.webp';
import TagAutor from '../../UI/pages/home/TagAutor';

const Featured = () => {
    return (
        <section className='section featured default-padding'>
            <TagAutor />
            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={600}>
                <h2 className="featured__title font-h2">
                    Beyond the Dream.
                </h2>
            </Animated>

            <div className="featured__price-block">
                <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={800}>
                    <h5 className="featured__sub-price font-title">
                        Buy now price
                    </h5>                    
                </Animated>
                <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={900}>
                    <h3 className="featured__price-eth font-h3">
                        8.00 ETH
                    </h3>                    
                </Animated>
                <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <h5 className="featured__price-usdt font-title">
                        $24,635.39    
                    </h5>                        
                </Animated>
            </div>
            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <div className="featured__btn font-button w-100">
                    <a href="#" className="featured__btn-btn">
                        make offer
                    </a>
                </div>                
            </Animated>

            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <img data-src={ImageFeatured3d} alt="" className="featured__img" />
            </Animated>
            
        </section>
    );
};


export default Featured