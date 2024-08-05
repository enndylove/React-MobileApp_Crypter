import { lazy, useEffect } from "react";
import { mainnet } from "viem/chains";
import { useAccount } from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import Picture from "./ChooseImg";

import ChooseTags from "./components/ChooseTags";
import ChooseUseApi from "./components/ChooseUseApi";
import ChooseTagsBlock from "./components/ChooseTagsBlock";

const CookieDark = lazy(() => import("../../../main/CookieDark"));

/**
 * Choose component for wallet selection.
 *
 * This component provides a user interface for selecting a wallet provider.
 * It uses the `wagmi` library for wallet connection and the `viem` library for chain configuration.
 *
 * @returns {JSX.Element} The Choose component.
 */
const Choose = () => {
  /**
   * Connector object from `wagmi`.
   */
  const { connector } = useAccount();

  /**
   * Effect hook for handling account connection and disconnection.
   */
  useAccount({
    /**
     * Callback function for when the account is connected.
     *
     * @param {Object} params - Connection parameters.
     * @param {string} params.address - The connected account address.
     */
    onConnect({ address }) {
      console.log("Connected", { address, connector });
      localStorage.setItem("userAddress", address);
    },
    /**
     * Callback function for when the account is disconnected.
     */
    onDisconnect() {
      localStorage.userAddress.clear();
    },
  });

  /**
   * Effect hook for initializing the ChooseTags component.
   */
  useEffect(() => {
    ChooseTags("choose__useapi");
    ChooseTags("choose__tag");
  }, []);

  /**
   * Project ID for WalletConnect.
   */
  const projectId = process.env.REACT_APP_WALLETCONNECT || undefined;

  /**
   * Metadata for WalletConnect.
   */
  const metaDataName = process.env.REACT_APP_WALLETCONNECT_NAME || "Connect Crypter";
  const metaDataDescription = process.env.REACT_APP_WALLETCONNECT_DESCRIPTION || "Connect Crypter login walletConnect";
  const metaDataUrl = process.env.REACT_APP_WALLETCONNECT_URL || "https://localhost:5000/";
  const metaDataIcons = process.env.REACT_APP_WALLETCONNECT_ICONS || ["https://avatars.githubusercontent.com/u/37784886"];

  /**
   * Chain configuration for `wagmi`.
   */
  const chains = [mainnet];

  /**
   * Configuration for `wagmi`.
   */
  const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata: {
      name: metaDataName,
      description: metaDataDescription,
      url: metaDataUrl,
      icons: metaDataIcons,
    },
  });

  /**
   * Create a Web3 modal instance.
   */
  const modal = createWeb3Modal({
    wagmiConfig,
    projectId,
    showQrModal: true,
    chains,
    themeVariables: {
      "--w3m-color-mix": "#010101",
      "--w3m-color-mix-strength": 0,
    },
  });

  /**
   * Connect wallet function.
   *
   * Opens the Web3 modal for wallet connection.
   */
  async function connectWallet() {
    if (document.querySelector(".choose__useapi.active")) {
      modal.open();
    }
  }

  return (
      <section className="section choose default-padding">
        <h3 className="choose__title font-h3 color-white">Choose the wallet</h3>

        {ChooseTagsBlock(["Ethereum", "Flow", "Solana"])}

        <div className="choose__api w-100">
          {ChooseUseApi("MetaMask", "Ethereum", Picture.Imeta, Picture.useApiArrow)}
          {ChooseUseApi("WalletConnect", "Ethereum", Picture.Iwallet, Picture.useApiArrow)}
          {ChooseUseApi("Coinbase Wallet", "Ethereum", Picture.Icoin, Picture.useApiArrow)}
          {ChooseUseApi("MyEtherWallet", "Ethereum", Picture.Iether, Picture.useApiArrow)}
        </div>

        <div className="choose__btn w-100 d-flex align-items-center justify-content-center" onClick={connectWallet}>
          <p className="choose__btn-font font-base color-white">Scan to connect</p>
        </div>

        <CookieDark />
      </section>
  );
};

export default Choose;