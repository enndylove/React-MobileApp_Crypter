import SpotlightContent from "./components/SpotlightContent";
import Picture from './Picture/PictureSpot';

/**
 * SpotBlocks component: renders a list of spotlight content blocks
 *
 * @returns {JSX.Element} A div element containing multiple spotlight content blocks
 *
 * @example
 * import SpotBlocks from './SpotBlocks';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <SpotBlocks />
 *     </div>
 *   );
 * };
 */
const SpotBlocks = () => {
  /**
   * Default avatar images
   *
   * @type {Array<string>}
   */
  const defaultAvatar = [Picture.ImgAvatar1, Picture.ImgAvatar2, Picture.ImgAvatar3];

  return (
      <div className="spotlight__blocks w-100">
        {/**
         * Render multiple spotlight content blocks with different images and titles
         */}
        {SpotlightContent(Picture.ImgPost1, "The Currency", "12.29", defaultAvatar)}
        {SpotlightContent(Picture.ImgPost2, "CutePlanet ", "12.29", defaultAvatar)}
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
  );
};

export default SpotBlocks;