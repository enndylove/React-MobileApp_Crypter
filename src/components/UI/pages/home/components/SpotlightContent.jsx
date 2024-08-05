import {Animated} from "react-animated-css";

/**
 * SpotlightContent component
 *
 * Renders a spotlight content block with an image, title, price, and avatars.
 *
 * @param {string} imageSrc - The source URL of the image.
 * @param {string} title - The title of the spotlight content.
 * @param {string} price - The price of the spotlight content in ETH.
 * @param {array} avatarsSrc - An array of source URLs for the avatars.
 *
 * @returns {JSX.Element} The spotlight content block.
 *
 * @example
 * import SpotlightContent from './SpotlightContent';
 *
 * const imageSrc = 'https://example.com/image.jpg';
 * const title = 'Example Title';
 * const price = '1.23';
 * const avatarsSrc = [
 *   'https://example.com/avatar1.jpg',
 *   'https://example.com/avatar2.jpg',
 *   'https://example.com/avatar3.jpg',
 * ];
 *
 * const spotlightContent = SpotlightContent(imageSrc, title, price, avatarsSrc);
 *
 * return spotlightContent;
 */
const SpotlightContent = (imageSrc, title, price, avatarsSrc) => {
    /**
     * AvatarBlock component
     *
     * Renders a block of avatars.
     *
     * @returns {JSX.Element} The avatar block.
     */
    const AvatarBlock = () => {
        if (avatarsSrc && avatarsSrc.length > 0) {
            return avatarsSrc.map((src, index) => (
                <div key={index} className="spotlight__avatar-block">
                    <img loading="lazy" data-src={src} src={src} alt="" className="spotlight__avatar" />
                </div>
            ));
        } else {
            return ""
        }
    }
    return (
        <div className="spotlight__content w-100">
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <img loading="lazy" data-src={imageSrc} src={imageSrc} alt="" className="spotlight__img w-100" />
            </Animated>

            <div className="spotlight__content-block d-flex align-items-center justify-content-between">
                <div className="spotlight__block">
                    <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
                        <h5 className="spotlight__content-title color-white font-body1">
                            {title}
                        </h5>
                    </Animated>
                    <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
                        <p className="spotlight__content-price font-base">
                            Buy now
                            <span className="color-white font-base spotlight__price-eth">
                {price} ETH
              </span>
                        </p>
                    </Animated>
                </div>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
                    <div className="spotlight__avatars d-flex flex-nowrap">
                        {AvatarBlock()}
                    </div>
                </Animated>
            </div>
        </div>
    )
}

export default SpotlightContent;