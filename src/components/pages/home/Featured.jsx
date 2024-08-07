import { Animated } from "react-animated-css";
import ImageFeatured3d from "../../../image/pages/home/featured3d.webp";
import TagAutor from "../../UI/pages/home/TagAutor";

/**
 * FeaturedMain component
 *
 * @param {string} title - The title of the featured item
 * @param {number} eth - The price of the featured item in ETH
 * @param {number} usdt - The price of the featured item in USDT
 * @param {string} hrefBtn - The link to the featured item
 * @param {string} featuredImg - The image of the featured item
 *
 * @returns {JSX.Element} The FeaturedMain component
 *
 * @example
 * <FeaturedMain
 *   title="Beyond the Dream."
 *   eth={8}
 *   usdt={24635.39}
 *   hrefBtn="#"
 *   featuredImg={ImageFeatured3d}
 * />
 */
const FeaturedMain = (title, eth, usdt, hrefBtn, featuredImg) => {
    return (
        <>
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={600}>
                <h2 className="featured__title font-h2">{title}</h2>
            </Animated>

            <div className="featured__price-block">
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={800}>
                    <h5 className="featured__sub-price font-title">Buy now price</h5>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={900}>
                    <h3 className="featured__price-eth font-h3">{eth.toFixed(2)} ETH</h3>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <h5 className="featured__price-usdt font-title">{usdt.toFixed(2)}</h5>
                </Animated>
            </div>
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <div className="featured__btn font-button w-100">
                    <a href={hrefBtn} className="featured__btn-btn">
                        make offer
                    </a>
                </div>
            </Animated>

            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <img data-src={featuredImg} alt="" className="featured__img" />
            </Animated>
        </>
    )
}

/**
 * Featured component
 *
 * @returns {JSX.Element} The Featured component
 *
 * @example
 * <Featured />
 */
const Featured = () => {
    return (
        <section className="section featured default-padding">
            {TagAutor('', '@randomdash')}
            {FeaturedMain('Beyond the Dream.', 8, 24635.39, "#", ImageFeatured3d)}
        </section>
    );
};

export default Featured;