import React from 'react';
import ReactDOM from 'react-dom/client';

import './bootstrap.min.css';
import './reset.css';
import './index.css';


import Header from './components/main/Header';
import HomeHero from './components/pages/home/Homehero';
import HotNFT from './components/pages/home/Hotnft';
import Featured from './components/pages/home/Featured';
import Stack from './components/pages/home/Stack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <HomeHero/>
    <HotNFT/>
    <Featured/>
    <Stack/>
  </React.StrictMode>
);
