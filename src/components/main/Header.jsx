import { useState, useEffect } from "react";
import { useApiArrow } from "../UI/pages/connectWallet/ChooseImg";
import Moralis from "moralis";
import "../../styles/Header+.scss";

const Header = () => {
  const [isUserRegistered, setisUserRegistered] = useState(false);
  const initialState = {
    walletAddress: "",
    walletBalance: undefined,
    walletUSDTBalance: undefined,
    walletAvatar: "",
    walletName: "loading...",
    walletTagName: "loading...",
    walletAddressClip: "loading...",
  };
  const [profile, setProfile] = useState(initialState);
  const fetchProfileData = async () => {
    try {
      const address = localStorage.getItem("userAddress");
      if (!address) {
        window.location = "/connectWallet";
        return;
      } else {
        setisUserRegistered(true);
      }

      const response = await Moralis.EvmApi.wallets.getWalletActiveChains({
        address: address,
      });
      const balance = await Moralis.EvmApi.balance.getNativeBalance({
        chain: response.raw.active_chains[0]?.chain_id,
        address: address,
      });
      const name = await Moralis.EvmApi.resolve.resolveAddress({
        address: address,
      });
      const resp = await Moralis.EvmApi.nft.getWalletNFTs({
        address: address,
        chain: response.raw.active_chains[0]?.chain_id,
      });
      const formattedBalance = parseFloat(balance.raw.balance) / 10 ** 18;
      const walletName =
        name?.raw?.name ||
        `${response.raw.active_chains[0]?.chain}_${response.raw.active_chains[0]?.chain_id}`;
      const walletTagName = `@${
        name?.raw?.name ||
        response.raw.active_chains[0]?.chain +
          response.raw.active_chains[0]?.chain_id
      }`;

      setProfile((prevProfile) => ({
        ...prevProfile,
        walletAddress: address,
        walletBalance: formattedBalance.toFixed(2),
        walletUSDTBalance: (formattedBalance.toFixed(2) * 2229).toFixed(2),
        walletName,
        walletTagName,
        walletAddressClip: `${address.substring(0, 6)}...${address.slice(-4)}`,
      }));

      console.log(response.raw, balance.raw, name, resp);
    } catch (error) {
      console.error(error);
    }
  };
  const randomAvatars = [
    "https://i.seadn.io/gcs/files/e682d6a6f6e2c46ad24a518b860d3296.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/d5c725ebe84f336783c345eb8afee8ab.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/587e816f1e9179a1a52b1b5860f9b041.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/4117ce1382f8589e426b193262f6d4d0.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/655544134798d3f69544847cdfbd4470.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/b4c26b761119253921aacf43a6ea3727.png?auto=format&dpr=1&w=1000",
    "https://i.seadn.io/gcs/files/e130b0b0bd3ca7f3ef974149e11d74f1.png?auto=format&dpr=1&w=1000",
  ];
  useEffect(() => {
    const startMoralis = async () => {
      try {
        const moralisApiKey = process.env.REACT_APP_MORALIS;
        await Moralis.start({
          apiKey: moralisApiKey,
        });
        fetchProfileData();
        console.log("Moralis started successfully");
      } catch (error) {
        console.error("Moralis is started:");
      }
    };
    startMoralis();
    let address = localStorage.getItem("userAddress");
    if (address) {
      setisUserRegistered(true);
    }
    const randomNum = Math.floor(Math.random() * randomAvatars.length);
    const selectedAvatar = randomAvatars[randomNum];
    setProfile((prevProfile) => ({
      ...prevProfile,
      walletAddress: address,
      walletAddressClip: `${address.substring(0, 6)}...${address.slice(-4)}`,
      walletAvatar: selectedAvatar,
    }));
  }, []);
  const burgerFunc = (e) => {
    let burder = document.querySelector(".header__burger");
    let nav = document.querySelector(".header__nav");
    let navItem = document.querySelectorAll(".nav__item");
    if (burder.classList.contains("active")) {
      burder.classList.remove("active");
      nav.classList.remove("active");
      navItem.forEach((item) => {
        item.classList.remove("flash");
        item.classList.remove("animated");
      });
    } else {
      burder.classList.add("active");
      nav.classList.add("active");
      navItem.forEach((item) => {
        item.classList.add("flash");
        item.classList.add("animated");
      });
    }
  };

  function profileWidget() {
    let element = document.querySelector(".header__profile"),
      bg = document.querySelector(".header__profile-background");
    element.classList.add("active");
    bg.classList.add("active");
  }
  function profileClose() {
    let element = document.querySelector(".header__profile"),
      bg = document.querySelector(".header__profile-background");
    if (
      element.classList.contains("active") &&
      bg.classList.contains("active")
    ) {
      element.classList.remove("active");
      bg.classList.remove("active");
    }
  }
  const disconnectApi = async () => {
    window.location = "/connectWallet";
  };

  return (
    <header className="header wrapper">
      <div className="d-flex align-items-center justify-content-between">
        <a href="/" className="bled-mode">
          <svg
            className="header__logo"
            viewBox="0 0 168 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0002 2.3091C21.525 0.880039 18.4754 0.880039 16.0002 2.3091L6.67969 7.6903C4.20448 9.11936 2.67969 11.7604 2.67969 14.6185V25.3809C2.67969 28.239 4.20448 30.88 6.67969 32.3091L16.0002 37.6903C18.4754 39.1194 21.525 39.1194 24.0002 37.6903L33.3207 32.3091C35.7959 30.88 37.3207 28.239 37.3207 25.3809V14.6185C37.3207 11.7604 35.7959 9.11936 33.3207 7.6903L24.0002 2.3091ZM20.0002 29.9997C25.523 29.9997 30.0002 25.5225 30.0002 19.9997C30.0002 14.4769 25.523 9.9997 20.0002 9.9997C14.4773 9.9997 10.0002 14.4769 10.0002 19.9997C10.0002 25.5225 14.4773 29.9997 20.0002 29.9997Z"
              fill="#ffffff"
            />
            <circle cx="19.9991" cy="20.0001" r="4.44444" fill="#ffffff" />
            <path
              d="M69.4205 18.0909H64.6136C64.5795 17.6932 64.4886 17.3324 64.3409 17.0085C64.1989 16.6847 64 16.4062 63.7443 16.1733C63.4943 15.9347 63.1903 15.7528 62.8324 15.6278C62.4744 15.4972 62.0682 15.4318 61.6136 15.4318C60.8182 15.4318 60.1449 15.625 59.5938 16.0114C59.0483 16.3977 58.6335 16.9517 58.3494 17.6733C58.071 18.3949 57.9318 19.2614 57.9318 20.2727C57.9318 21.3409 58.0739 22.2358 58.358 22.9574C58.6477 23.6733 59.0653 24.2131 59.6108 24.5767C60.1563 24.9347 60.8125 25.1136 61.5795 25.1136C62.017 25.1136 62.4091 25.0597 62.7557 24.9517C63.1023 24.8381 63.4034 24.6761 63.6591 24.4659C63.9148 24.2557 64.1222 24.0028 64.2812 23.7074C64.446 23.4062 64.5568 23.0682 64.6136 22.6932L69.4205 22.7273C69.3636 23.4659 69.1563 24.2187 68.7983 24.9858C68.4403 25.7472 67.9318 26.4517 67.2727 27.0994C66.6193 27.7415 65.8097 28.2585 64.8438 28.6506C63.8778 29.0426 62.7557 29.2386 61.4773 29.2386C59.875 29.2386 58.4375 28.8949 57.1648 28.2074C55.8977 27.5199 54.8949 26.5085 54.1562 25.1733C53.4233 23.8381 53.0568 22.2045 53.0568 20.2727C53.0568 18.3295 53.4318 16.6932 54.1818 15.3636C54.9318 14.0284 55.9432 13.0199 57.2159 12.3381C58.4886 11.6506 59.9091 11.3068 61.4773 11.3068C62.5795 11.3068 63.5938 11.4574 64.5199 11.7585C65.446 12.0597 66.2585 12.5 66.9574 13.0795C67.6563 13.6534 68.2188 14.3608 68.6449 15.2017C69.071 16.0426 69.3295 17.0057 69.4205 18.0909ZM71.5703 29V11.5455H79.1044C80.3999 11.5455 81.5334 11.7812 82.505 12.2528C83.4766 12.7244 84.2322 13.4034 84.772 14.2898C85.3118 15.1761 85.5817 16.2386 85.5817 17.4773C85.5817 18.7273 85.3033 19.7812 84.7464 20.6392C84.1953 21.4972 83.4197 22.1449 82.4197 22.5824C81.4254 23.0199 80.2635 23.2386 78.9339 23.2386H74.4339V19.5568H77.9794C78.5362 19.5568 79.0107 19.4886 79.4027 19.3523C79.8004 19.2102 80.1044 18.9858 80.3146 18.679C80.5305 18.3722 80.6385 17.9716 80.6385 17.4773C80.6385 16.9773 80.5305 16.571 80.3146 16.2585C80.1044 15.9403 79.8004 15.7074 79.4027 15.5597C79.0107 15.4062 78.5362 15.3295 77.9794 15.3295H76.3089V29H71.5703ZM81.7976 20.9886L86.1612 29H81.0135L76.7521 20.9886H81.7976ZM86.0653 11.5455H91.3494L94.7585 18.6364H94.8949L98.304 11.5455H103.588L97.179 23.5114V29H92.4744V23.5114L86.0653 11.5455ZM105.133 29V11.5455H112.667C113.962 11.5455 115.096 11.8011 116.067 12.3125C117.039 12.8239 117.795 13.5426 118.335 14.4688C118.874 15.3949 119.144 16.4773 119.144 17.7159C119.144 18.9659 118.866 20.0483 118.309 20.9631C117.758 21.8778 116.982 22.5824 115.982 23.0767C114.988 23.571 113.826 23.8182 112.496 23.8182H107.996V20.1364H111.542C112.099 20.1364 112.573 20.0398 112.965 19.8466C113.363 19.6477 113.667 19.3665 113.877 19.0028C114.093 18.6392 114.201 18.2102 114.201 17.7159C114.201 17.2159 114.093 16.7898 113.877 16.4375C113.667 16.0795 113.363 15.8068 112.965 15.6193C112.573 15.4261 112.099 15.3295 111.542 15.3295H109.871V29H105.133ZM120.406 15.3636V11.5455H135.576V15.3636H130.326V29H125.656V15.3636H120.406ZM137.359 29V11.5455H149.939V15.3636H142.098V18.3636H149.291V22.1818H142.098V25.1818H149.905V29H137.359ZM152.289 29V11.5455H159.823C161.119 11.5455 162.252 11.7812 163.224 12.2528C164.195 12.7244 164.951 13.4034 165.491 14.2898C166.031 15.1761 166.3 16.2386 166.3 17.4773C166.3 18.7273 166.022 19.7812 165.465 20.6392C164.914 21.4972 164.138 22.1449 163.138 22.5824C162.144 23.0199 160.982 23.2386 159.653 23.2386H155.153V19.5568H158.698C159.255 19.5568 159.729 19.4886 160.121 19.3523C160.519 19.2102 160.823 18.9858 161.033 18.679C161.249 18.3722 161.357 17.9716 161.357 17.4773C161.357 16.9773 161.249 16.571 161.033 16.2585C160.823 15.9403 160.519 15.7074 160.121 15.5597C159.729 15.4062 159.255 15.3295 158.698 15.3295H157.028V29H152.289ZM162.516 20.9886L166.88 29H161.732L157.471 20.9886H162.516Z"
              fill="#ffffff"
            />
          </svg>
        </a>
        {isUserRegistered ? (
          <div className="header__create header__widget bled-mode">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="#F7FBFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18L12 6"
                stroke="#F7FBFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        {isUserRegistered ? (
          <div className="header__flash header__widget">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9072 9.32788H14.818C14.4193 9.32788 14.0207 9.02927 14.0207 8.53158V3.057C14.0207 2.16116 12.9246 1.66347 12.227 2.2607L5.35102 11.7168C4.65346 12.4136 5.05207 13.608 6.04859 13.608H9.63605C10.0347 13.608 10.4333 13.9066 10.4333 14.4043V19.8789C10.4333 20.8743 11.5294 21.372 12.227 20.6752L18.6047 11.3186C19.4019 10.5223 18.9037 9.32788 17.9072 9.32788Z"
                stroke="#010101"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        {isUserRegistered ? (
          <>
            <div
              className="header__profile header__widget"
              onClick={profileWidget}
            >
              <img
                className="header__profile-avatar"
                src={profile.walletAvatar}
                alt="Avatar"
              />
            </div>
            <div className="header__profile-background position-fixed">
              <div
                className="header__profile-close d-flex align-items-center"
                onClick={profileClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="#F7FBFA"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 18L6 6"
                    stroke="#F7FBFA"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="header__profile-content d-flex justify-content-between flex-column">
                <div className="">
                  <div className="header__profile-person d-flex align-items-center">
                    <img
                      className="header__profile-person-avatar"
                      src={profile.walletAvatar}
                      alt=""
                    />
                    <div className="">
                      <h4 className="header__profile-person-name font-body1 color-white">
                        {profile.walletName}
                      </h4>
                      <p className="header__profile-person-tagname font-base">
                        {profile.walletTagName}
                      </p>
                    </div>
                  </div>
                  <div className="header__profile-disconnect d-flex align-items-center justify-content-between">
                    <p className="font-base">Connecting Wallet</p>
                    <p
                      onClick={disconnectApi}
                      className="disconnect font-base color-white d-flex align-items-center"
                    >
                      <span style={{ marginRight: 12 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9.75 14.25L14.25 9.75M14.25 14.25L9.75 9.75"
                            stroke="#686A6C"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 12.5294C21 19 19 21 12 21C5 21 3 19 3 12C3 5 5 3 12 3C19 3 21 5 21 12.5294Z"
                            stroke="#686A6C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Disconnect
                    </p>
                  </div>
                  <div className="header__profile-wallet">
                    <div className="header__profile-wallet-address d-flex align-items-center">
                      <h4 className="font-base color-white">
                        {profile.walletAddressClip}
                      </h4>
                      <span></span>
                    </div>
                    <div className="header__profile-count d-flex align-items-center justify-content-between">
                      <div className="header__profile-wallet-eth font-body1 color-white">
                        {profile.walletBalance} ETH
                      </div>
                      <div className="header__profile-wallet-usdt font-body1">
                        ${profile.walletUSDTBalance}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <li className="nav__item d-flex active align-items-center justify-content-between">
                    <a href="/profile" className="nav__link font-body1 fw-800">
                      My profile
                    </a>
                    <img
                      data-src={useApiArrow}
                      src={useApiArrow}
                      alt=""
                      className="nav__arrow"
                    />
                  </li>
                  <li className="nav__item d-flex align-items-center justify-content-between">
                    <a
                      href="/profile/settings"
                      className="nav__link font-body1 fw-800"
                    >
                      Settings
                    </a>
                    <img
                      data-src={useApiArrow}
                      src={useApiArrow}
                      alt=""
                      className="nav__arrow"
                    />
                  </li>
                  <li className="nav__item d-flex align-items-center justify-content-between">
                    <a
                      href="/profile/settings"
                      className="nav__link font-body1 fw-800"
                    >
                      Help
                    </a>
                    <img
                      data-src={useApiArrow}
                      src={useApiArrow}
                      alt=""
                      className="nav__arrow"
                    />
                  </li>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <nav className="header__nav">
          <ul className="header__ul d-flex flex-column">
            <li className="nav__item active d-flex align-items-center justify-content-between">
              <a href="#" className="nav__link font-h4">
                Discover
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
            <li className="nav__item d-flex align-items-center justify-content-between">
              <a href="#" className="nav__link font-h4">
                Create
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
            <li className="nav__item d-flex align-items-center justify-content-between">
              <a href="#" className="nav__link font-h4">
                Feed
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
            <li className="nav__item d-flex align-items-center justify-content-between">
              <a href="#" className="nav__link font-h4">
                Help center
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
            <li className="nav__item d-flex align-items-center justify-content-between">
              <a href="#" className="nav__link font-h4">
                Blog
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
            <li className="nav__item d-flex align-items-center justify-content-between">
              <a
                href="/connectWallet"
                className="nav__link nav__link-btn font-h4"
              >
                ConnectWallet
              </a>
              <img
                data-src={useApiArrow}
                src={useApiArrow}
                alt=""
                className="nav__arrow"
              />
            </li>
          </ul>
          <p className="font-base">Download app</p>
          <div className="w-100">
            <a
              href="#"
              className="download__button header__menu-button w-100 font-button"
            >
              apple store
              <svg
                className="dowload__button-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8438 9.89209C17.7188 8.37067 16.125 8.19167 15.5625 8.19167C14.1563 8.01268 12.8438 8.99713 12.0938 8.99713C11.3438 8.99713 10.3125 8.19167 9.09375 8.28117C6.9375 8.28117 4.5 9.98158 4.5 13.3824C4.5 17.0517 7.5 21.258 9.375 21.1685C10.5937 21.1685 10.875 20.4526 12.2813 20.4526C13.6875 20.4526 13.9688 21.1685 15.2812 21.1685C17.0625 21.1685 18.8438 18.3047 19.5 16.6937C16.5 15.1723 16.125 11.5925 18.8438 9.89209Z"
                  stroke="#F7FBFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9767 2.16992C13.3252 2.25482 11.2419 4.3774 11.526 6.16036C13.8934 6.33017 16.2608 4.20759 15.9767 2.16992Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="w-100">
            <a
              href="#"
              className="download__button header__menu-button w-100 font-button white"
            >
              google play
              <svg
                className="dowload__button-icon white"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13.3262H18.9693C18.6357 16.8715 15.6288 19.6699 12 19.6699C8.15 19.6699 5 16.5199 5 12.6699C5 8.81992 8.15 5.66992 12 5.66992C14.275 5.66992 16.375 6.80742 17.6875 8.55742"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>
        <span className="header__burger bled-mode" onClick={burgerFunc}></span>
      </div>
    </header>
  );
};

export default Header;
