import { lazy } from "react";

const Header = lazy(() => import("../Header"));
const Slider = lazy(() => import("../../pages/Discover/Slider"));
const NFTs = lazy(() => import("../../pages/Discover/NFTs"));
const Auction = lazy(() => import("../../pages/Discover/Auction"));
const Collections = lazy(() => import("../../pages/Discover/Collections"));
const HotNFTs = lazy(() => import("../../pages/Discover/HotNFTs"));
const Download = lazy(() => import("../../UI/main/Download"));
const Footer = lazy(() => import("../Footer"));

import '../../../styles/Discover.scss'

const Discover = () => {
  return (
    <>

      <Header />
      <Slider />
      <NFTs />
      <Auction />
      <Collections />
      <HotNFTs />
      <Download />
      <Footer />

    </>
  );
};


export default Discover
