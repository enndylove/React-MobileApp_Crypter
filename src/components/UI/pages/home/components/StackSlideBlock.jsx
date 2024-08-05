import { Animated } from "react-animated-css";

/**
 * Renders a Stack Slide Block component.
 *
 * @param {string} BigImageSrc - The source URL of the big image.
 * @param {string[]} SmallImgSrc - An array of source URLs of small images.
 * @param {string} name - The name of the item.
 * @param {string} avatarSrc - The source URL of the author's avatar.
 * @param {string} autorName - The name of the author.
 * @param {number} priceEth - The price of the item in ETH.
 *
 * @example
 * const bigImageSrc = 'https://example.com/big-image.jpg';
 * const smallImgSrc = ['https://example.com/small-image1.jpg', 'https://example.com/small-image2.jpg'];
 * const name = 'Item Name';
 * const avatarSrc = 'https://example.com/author-avatar.jpg';
 * const autorName = 'Author Name';
 * const priceEth = 1.23;
 *
 * const StackSlideBlockComponent = StackSlideBlock(bigImageSrc, smallImgSrc, name, avatarSrc, autorName, priceEth);
 */
const StackSlideBlock = (BigImageSrc, SmallImgSrc, name, avatarSrc, autorName, priceEth) => {
    /**
     * Renders small images.
     *
     * @returns {JSX.Element} - A JSX element containing small images.
     */
    const SmallImages = () => {
        if (SmallImgSrc && SmallImgSrc.length > 0) {
            if (SmallImgSrc.length <= 2) {
                return SmallImgSrc.map((src, index) => (
                    <img loading="lazy" data-src={src} src={src} key={index} alt="" className="stack__sup-image" />
                ));
            } else {
                return (
                    <>
                        <img loading="lazy" data-src={SmallImgSrc[0]} src={SmallImgSrc[0]} alt="" className="stack__sup-image" />
                        <img loading="lazy" data-src={SmallImgSrc[1]} src={SmallImgSrc[1]} alt="" className="stack__sup-image" />
                    </>
                );
            }
        } else {
            return "";
        }
    };

    return (
        <div className="stack__slide-block w-100">
            <div className="stack__slide-images d-flex flex-column w-100 align-items-center">
                <div>
                    <img loading="lazy" data-src={BigImageSrc} src={BigImageSrc} alt="" className="stack__slide-image" />
                </div>

                <div className="stack__sup-images d-flex w-100 justify-content-between align-items-center">
                    {SmallImages()}
                    <span className="stack__sup-more stack__sup-image d-flex align-items-center justify-content-center font-body1">
            +{SmallImgSrc.length}
          </span>
                </div>
            </div>

            <div className="stack__slide-content w-100">
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <div className="stack__slide-info d-flex justify-content-between">
                        <p className="stack__slide-text font-body1">
                            {name}
                        </p>
                        <p className="stack__slide-text greu font-title">
                            Floor price
                        </p>
                    </div>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <div className="stack__slide-autor d-flex w-100 justify-content-between align-items-center">
            <span className="stack__autor-content font-title d-flex align-items-center">
              <div className="stack__autor-avatar-block">
                <img loading="lazy" className='stack__autor-avatar' data-src={avatarSrc} src={avatarSrc} alt="" />
              </div>
                {autorName}
            </span>
                        <p className="stack__autor-price font-title">
                            {parseInt(priceEth).toFixed(2)} ETH
                        </p>
                    </div>
                </Animated>

            </div>
        </div>
    );
};

export default StackSlideBlock;