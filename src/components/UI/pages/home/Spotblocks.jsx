import SpotlightContent from "./components/SpotlightContent";
import Picture from './Picture/PictureSpot';

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
