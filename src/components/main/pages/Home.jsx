import { lazy } from "react";

const Header = lazy(() => import("../Header"));
const HomeHero = lazy(() => import("../../pages/home/Homehero"));
const HotNFT = lazy(() => import("../../pages/home/Hotnft"));
const Featured = lazy(() => import("../../pages/home/Featured"));
const Stack = lazy(() => import("../../pages/home/Stack"));
const Auction = lazy(() => import("../../pages/home/Auction"));
const Spotlight = lazy(() => import("../../pages/home/Spotlight"));
const Blog = lazy(() => import("../../pages/home/Blog"));
const Download = lazy(() => import("../../UI/main/Download"));
const Footer = lazy(() => import("../Footer"));
const Cookie = lazy(() => import("../Cookie"));

const LazyLoad = lazy(() => import("../Lazyload"));

const HomePage = () => {
  return (
    <>
      <Header />

      <HomeHero />
      <HotNFT />
      <Featured />
      <Stack />
      <Auction />
      <Spotlight />
      <Blog />
      <Download />
      <Footer />
      <Cookie />

      <LazyLoad />
    </>
  );
};
window.onload = function () {
  let preloaderStatus = document.querySelectorAll(".preloader-status");
  preloaderStatus.forEach((item) => {
    item.classList.remove("active");
  });
};

export default HomePage;
