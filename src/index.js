/**
 * Import necessary dependencies from React, React Router, and Wagmi.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

/**
 * Import CSS stylesheets for fonts, reset, and index.
 */
import './fonts.css';
import './reset.css';
import './index.css';

/**
 * Import page components.
 */
import Preloader from './components/main/Preloader';
import HomePage from './components/main/pages/Home';
import ConnectWallet from './components/main/pages/ConnectWallet';
import Profile from './components/main/pages/Profile';
import Discover from './components/main/pages/Discover';
import Settings from './components/main/pages/Settings';

/**
 * Configure Wagmi chains and providers.
 */
const { publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [publicProvider()]
);

/**
 * Create Wagmi config.
 */
const config = createConfig({
    publicClient,
    webSocketPublicClient,
});

/**
 * App component.
 *
 * @returns {JSX.Element} The app component tree.
 */
export default function App() {
    return (
        /**
         * Use BrowserRouter to enable client-side routing.
         */
        <BrowserRouter>
            {/**
             * Use WagmiConfig to provide Wagmi config to the app.
             */}
            <WagmiConfig config={config}>
                {/**
                 * Define routes for the app.
                 */}
                <Routes>
                    {/**
                     * Index route.
                     */}
                    <Route
                        index
                        exact
                        element={
                            /*** Use Suspense to display a preloader while the page is loading.*/
                            <Suspense fallback={<Preloader />}>
                        <HomePage />
                    </Suspense>
                    }
                />
                {/**
                 * Connect wallet route.
                 */}
                <Route
                    path="/connectwallet"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <ConnectWallet />
                        </Suspense>
                    }
                />
                {/**
                 * Profile route.
                 */}
                <Route
                    path="/profile"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Profile />
                        </Suspense>
                    }
                />
                {/**
                 * Discover route.
                 */}
                <Route
                    path="/discover"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Discover />
                        </Suspense>
                    }
                />
                {/**
                 * Settings route.
                 */}
                <Route
                    path="/profile/settings"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Settings />
                        </Suspense>
                    }
                />
            </Routes>
        </WagmiConfig>
</BrowserRouter>
);
}

/**
 * Render the app to the DOM.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);