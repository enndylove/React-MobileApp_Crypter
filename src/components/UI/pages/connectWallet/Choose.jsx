import { lazy, useEffect } from "react";
import { mainnet } from "viem/chains";
import { useAccount } from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import Picture from "./ChooseImg";

import ChooseTags from "./components/ChooseTags";
import ChooseUseApi from "./components/ChooseUseApi";
import ChooseTagsBlock from "./components/ChooseTagsBlock";

const CookieDark = lazy(() => import("../../../main/CookieDark"));

const Choose = () => {
  const { connector } = useAccount();
  useAccount({
    onConnect({ address }) {
      console.log("Connected", { address, connector });
      localStorage.setItem("userAddress", address);
    },
    onDisconnect() {
      localStorage.userAddress.clear();
    },
  });
  useEffect(() => {
    ChooseTags("choose__useapi")
    ChooseTags("choose__tag")
  }, []);
  const projectId = process.env.REACT_APP_WALLETCONNECT  || undefined;

  const metaDataName = process.env.REACT_APP_WALLETCONNECT_NAME || "Connect Crypter",
    metaDataDescription = process.env.REACT_APP_WALLETCONNECT_DESCRIPTION || "Connect Crypter login walletConnect",
    metaDataUrl = process.env.REACT_APP_WALLETCONNECT_URL || "https://localhost:5000/",
    metaDataIcons = process.env.REACT_APP_WALLETCONNECT_ICONS || ["https://avatars.githubusercontent.com/u/37784886"];

  const chains = [mainnet];
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

  async function connectWallet() {
    if (document.querySelector(".choose__useapi.active")) {
      modal.open();
    }
  }

  return (
    <section className="section choose default-padding">
      <h3 className="choose__title font-h3 color-white">
        Choose the wallet
      </h3>

      {ChooseTagsBlock(["Ethereum", "Flow", "Solana"])}

      <div className="choose__api w-100">

        {ChooseUseApi("MetaMask", "Ethereum", Picture.Imeta, Picture.useApiArrow)}
        {ChooseUseApi("WalletConnect", "Ethereum", Picture.Iwallet, Picture.useApiArrow)}
        {ChooseUseApi("Coinbase Wallet", "Ethereum", Picture.Icoin, Picture.useApiArrow)}
        {ChooseUseApi("MyEtherWallet", "Ethereum", Picture.Iether, Picture.useApiArrow)}

      </div>

      <div className="choose__btn w-100 d-flex align-items-center justify-content-center" onClick={connectWallet}>
        <p className="choose__btn-font font-base color-white">
          Scan to connect
        </p>
      </div>

      <CookieDark />
    </section>
  );
};

export default Choose;
