import { lazy, useEffect } from "react";
import { mainnet } from "viem/chains";
import { useAccount } from "wagmi";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import Picture from "./ChooseImg";

const CookieDark = lazy(() => import("../../../main/CookieDark"));

const ChooseUseApi = (name, tag, icon, arrow) => {
  return (
    <div className="choose__useapi d-flex justify-content-between align-items-center w-100" data-url={name} data-tag={tag}>
      <div className="d-flex align-items-center">
        <img loading="lazy" data-src={icon} src={icon} alt="" className="choose__useapi-img" />
        <h6 className="choose__useapi-name font-body2-bold color-white">
          {name}
        </h6>
      </div>
      <div className="choose__useapi-arrow">
        {arrow}
      </div>
    </div>
  )
}

function ChooseTags(querty) {
  let elements = document.querySelectorAll(`.${querty}`);
  elements.forEach((item) => {
    item.addEventListener("click", () => {
      let active = document.querySelector(`.${querty}.active`);
      if (active) {
        if (!item.classList.contains("active")) {
          active.classList.remove("active");
          item.classList.add("active");
        }
      } else {
        item.classList.add("active");
      }
    });
  });
}
const ChooseTagsBlock = (...name) => {
  const Tags = () => {
    name.forEach(tagName => {
      return (
        <span className="choose__tag">{tagName}</span>
      )
    })
  }
  return (
    <div className="choose__tags d-flex align-items-center overflow-auto">
      {Tags()}
    </div>
  )
}

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
  const projectId = process.env.REACT_APP_WALLETCONNECT;

  const metaDataName = process.env.REACT_APP_WALLETCONNECT_NAME,
    metaDataDescription = process.env.REACT_APP_WALLETCONNECT_DESCRIPTION,
    metaDataUrl = process.env.REACT_APP_WALLETCONNECT_URL,
    metaDataIcons = process.env.REACT_APP_WALLETCONNECT_ICONS;

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
