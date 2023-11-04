import ImageFeatured3d from '../../../image/pages/home/featured3d.png';
import TagAutor from '../../UI/home/TagAutor';

const Featured = () => {
    return (
        <section className='section featured default-padding'>
            <TagAutor/>
            <h2 className="featured__title font-h2">
                Beyond the Dream.
            </h2>
            <div className="featured__price-block">
                <h5 className="featured__sub-price font-title">
                    Buy now price
                </h5>
                <h3 className="featured__price-eth font-h3">
                    8.00 ETH
                </h3>
                <h5 className="featured__price-usdt font-title">
                    $24,635.39    
                </h5>       
            </div>
            <div className="featured__btn featured__btn-btn font-button w-100">
                <a href="#" className="featured__btn-btn">
                    make offer
                </a>
            </div>

            <img src={ImageFeatured3d} alt="" className="featured__img" />
        </section>
    );
};


export default Featured