import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { useAccount } from 'wagmi';

import './fonts.css';
import './reset.css';
import './index.css';

import Preloader from './components/main/Preloader';
import HomePage from './components/main/pages/Home';
import ConnectWallet from './components/main/pages/ConnectWallet';
import Profile from './components/main/pages/Profile';

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  publicClient,
  webSocketPublicClient,
});

export default function App() {
  return (
    <BrowserRouter>
      <WagmiConfig config={config}>
        <Routes>
          <Route
            index
            exact
            element={
              <Suspense fallback={<Preloader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/connectwallet"
            element={
              <Suspense fallback={<Preloader />}>
                <ConnectWallet />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Preloader />}>
                <Profile />
              </Suspense>
            }
          />
        </Routes>
      </WagmiConfig>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
