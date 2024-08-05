/**
 * Connect Wallet component.
 *
 * Renders the Wallet Content and Choose components.
 *
 * @returns {JSX.Element} The Connect Wallet component.
 *
 * @example
 * import React from 'react';
 * import ConnectWallet from './ConnectWallet';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <ConnectWallet />
 *     </div>
 *   );
 * };
 */
import { lazy } from "react";
import "../../../styles/connectWallet.scss";

/**
 * Lazily loads the Wallet Content component.
 *
 * @returns {JSX.Element} The Wallet Content component.
 */
const WalletContent = lazy(() =>
    import("../../pages/connectWallet/WalletContent")
);

/**
 * Lazily loads the Choose component.
 *
 * @returns {JSX.Element} The Choose component.
 */
const Choose = lazy(() => import("../../UI/pages/connectWallet/Choose"));

/**
 * Connect Wallet component.
 *
 * @returns {JSX.Element} The Connect Wallet component.
 */
const ConnectWallet = () => {
    return (
        <>
            <WalletContent />
            <Choose />
        </>
    );
};

export default ConnectWallet;