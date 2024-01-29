import { Animated } from 'react-animated-css';

import Picture from './Picture/PictureSpot';

const SpotlightContent = (imageSrc, title, price, avatarsSrc) => {
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

const SpotBlocks = () => {
  const defaultAvatar = [Picture.ImgAvatar1, Picture.ImgAvatar2, Picture.ImgAvatar3]
  return (
    <div className="spotlight__blocks w-100">

      {SpotlightContent(Picture.ImgPost1, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost2, "CutePlanet ®", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost3, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost4, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost5, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost6, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost7, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost8, "Robot: One", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost9, "Mars", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost10, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost11, "The Currency", "12.29", defaultAvatar)}
      {SpotlightContent(Picture.ImgPost12, "The Currency", "12.29", defaultAvatar)}

    </div>
  )
};

export default SpotBlocks;
