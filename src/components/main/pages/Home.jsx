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

/**
 * HomePage Component
 *
 * This component represents the main home page of the application.
 * It lazy loads various components to improve performance.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */
const HomePage = () => {
    return (
        <>
            {/**
             * Header Component
             *
             * The header component is lazy loaded and imported from "../Header".
             */}
            <Header />

            {/**
             * HomeHero Component
             *
             * The home hero component is lazy loaded and imported from "../../pages/home/Homehero".
             */}
            <HomeHero />

            {/**
             * HotNFT Component
             *
             * The hot NFT component is lazy loaded and imported from "../../pages/home/Hotnft".
             */}
            <HotNFT />

            {/**
             * Featured Component
             *
             * The featured component is lazy loaded and imported from "../../pages/home/Featured".
             */}
            <Featured />

            {/**
             * Stack Component
             *
             * The stack component is lazy loaded and imported from "../../pages/home/Stack".
             */}
            <Stack />

            {/**
             * Auction Component
             *
             * The auction component is lazy loaded and imported from "../../pages/home/Auction".
             */}
            <Auction />

            {/**
             * Spotlight Component
             *
             * The spotlight component is lazy loaded and imported from "../../pages/home/Spotlight".
             */}
            <Spotlight />

            {/**
             * Blog Component
             *
             * The blog component is lazy loaded and imported from "../../pages/home/Blog".
             */}
            <Blog />

            {/**
             * Download Component
             *
             * The download component is lazy loaded and imported from "../../UI/main/Download".
             */}
            <Download />

            {/**
             * Footer Component
             *
             * The footer component is lazy loaded and imported from "../Footer".
             */}
            <Footer />

            {/**
             * Cookie Component
             *
             * The cookie component is lazy loaded and imported from "../Cookie".
             */}
            <Cookie />

            {/**
             * LazyLoad Component
             *
             * The lazy load component is lazy loaded and imported from "../Lazyload".
             */}
            <LazyLoad />
        </>
    );
};

/**
 * Removes the preloader status on window load.
 */
window.onload = function () {
    let preloaderStatus = document.querySelectorAll(".preloader-status");
    preloaderStatus.forEach((item) => {
        item.classList.remove("active");
    });
};

export default HomePage;