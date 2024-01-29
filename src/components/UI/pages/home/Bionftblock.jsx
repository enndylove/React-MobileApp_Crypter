import { Animated } from "react-animated-css";

import Picture from './Picture/PictureBioNFT'

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

const BioNFTblock = () => {
  return (
    <div className="hotnft__blocks d-flex flex-wrap justify-content-center wrapper">
      {/* BLOCKS */}
      {BioNFTBlockComponent("@randomdash", "12.29", Picture.ImageNft1)}
      {BioNFTBlockComponent("@randomdash", "12.29", Picture.ImageNft2)}
      {BioNFTBlockComponent("@gelo", "12.29", Picture.ImageNft3)}
      {BioNFTBlockComponent("@elnafrederick", "12.29", Picture.ImageNft4)}
      {BioNFTBlockComponent("@_kolahon", "12.29", Picture.ImageNft5)}
      {BioNFTBlockComponent("@mcbess", "12.29", Picture.ImageNft6)}
      {BioNFTBlockComponent("@aaronpenne", "12.29", Picture.ImageNft7)}
      {BioNFTBlockComponent("@nocellcoverage", "12.29", Picture.ImageNft8)}
      {/* BLOCKS */}
    </div>
  );
};

export default BioNFTblock;
