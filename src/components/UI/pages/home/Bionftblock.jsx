import BioNFTBlockComponent from "./components/BioNFTBlockComponent";
import Picture from './Picture/PictureBioNFT'

/**
 * BioNFTblock component
 *
 * Renders a collection of BioNFT blocks with user information and NFT images.
 *
 * @returns {JSX.Element} A div element containing multiple BioNFTBlockComponent instances.
 * @example
 * <BioNFTblock />
 */
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