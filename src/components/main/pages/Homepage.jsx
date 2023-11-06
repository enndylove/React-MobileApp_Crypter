import { lazy } from 'react';

const Header = lazy (() => import('../../main/Header'))
const HomeHero = lazy (() => import('../../pages/home/Homehero'))
const HotNFT = lazy (() => import('../../pages/home/Hotnft'))
const Featured = lazy (() => import('../../pages/home/Featured'))
const Stack = lazy (() => import('../../pages/home/Stack'))
const Auction = lazy (() => import('../../pages/home/Auction'))
const LazyLoad = lazy (() => import('../../main/Lazyload'))
const HomePage = () => {
    return (
        <div>
            <Header />
            <HomeHero />
            <HotNFT />
            <Featured />
            <Stack />
            <Auction />
            <LazyLoad />
        </div>
    );
};
window.onload = function() {
    let preloaderStatus = document.querySelectorAll('.preloader-status');
    preloaderStatus.forEach(item => {
        item.classList.remove('active');
    });
}

export default HomePage