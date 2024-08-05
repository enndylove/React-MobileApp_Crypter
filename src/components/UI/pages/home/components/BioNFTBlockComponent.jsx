import { Animated } from "react-animated-css";

/**
 * BioNFTBlockComponent
 *
 * A React component that represents a single BioNFT block.
 *
 * @param {string} name - The name of the BioNFT.
 * @param {number} total - The total sale amount of the BioNFT in ETH.
 * @param {string} img - The image source of the BioNFT.
 *
 * @returns {JSX.Element} The BioNFT block component.
 *
 * @example
 * <BioNFTBlockComponent name="My BioNFT" total={10} img="https://example.com/image.jpg" />
 */
let id = 0
const BioNFTBlockComponent = (name, total, img) => {
    return (
        <Animated className="hotnft__block d-flex flex-column wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
            <span className="hotnft__id font-caption">{id += 1}</span>
            <div className="hotnft__image-block">
                <img className="hotnft__image" data-src={img} alt="" />
            </div>
            <h4 className="hotnft__name font-base">
                {name}
            </h4>
            <p className="hotnft__total font-caption m-auto">
                Total sale
                <span className="hotnft__total-num font-base" style={{ fontSize: '14px !important' }}>
          {total} ETH
        </span>
            </p>
        </Animated>
    )
}

export default BioNFTBlockComponent;