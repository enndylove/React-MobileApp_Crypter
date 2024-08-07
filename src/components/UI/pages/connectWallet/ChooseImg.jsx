/**
 * Import images for connect wallet page
 * @module connectWalletImages
 */

import Imeta from "../../../../image/pages/connectWallet/Imeta.webp";
import Iwallet from "../../../../image/pages/connectWallet/Iwallet.webp";
import Iether from "../../../../image/pages/connectWallet/Iether.webp";
import Icoin from "../../../../image/pages/connectWallet/Icoin.webp";

/**
 * Export images as an object
 * @typedef {Object} ConnectWalletImages
 * @property {string} Imeta - Meta image
 * @property {string} Iwallet - Wallet image
 * @property {string} Iether - Ether image
 * @property {string} Icoin - Coin image
 */
export default {
    Imeta,
    Iwallet,
    Iether,
    Icoin
};

/**
 * useApiArrow - An SVG icon for API arrow
 * @returns {string} SVG icon
 * @example
 * import useApiArrow from './connectWalletImages';
 * const apiArrowIcon = useApiArrow;
 */
export const useApiArrow =
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12H21" stroke="#F7FBFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 4L21 12L13 20" stroke="#F7FBFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;