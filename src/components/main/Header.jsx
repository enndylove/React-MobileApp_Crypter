import { useState, useEffect } from "react";
import { useApiArrow } from "../UI/pages/connectWallet/ChooseImg";
import Moralis from "moralis";
import Icons from './Icons/IconsHeader'
import "../../styles/Header+.scss";
// import cookie from "./Cookie";

// COMPONENTS

/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} href - The URL to link to
 * @param {JSX.Element} icon - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderLogo = (href, icon) => {
  return (
    <a href={href} className="bled-mode">
      {icon}
    </a>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} classes - The URL to link to
 * @param {JSX.Element} icon - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderWidgets = (classes, icon) => {
  return (
    <div className={classes}>
      {icon}
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {function} clickFunc - The URL to link to
 * @param {string} src - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderAvatar = (clickFunc, src) => {
  return (
    <div className="header__profile header__widget pointer" onClick={clickFunc}>
      <img className="header__profile-avatar" src={src} alt="Avatar" />
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {function} clickFunc - The URL to link to
 * @param {JSX.Element} icon - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderProfileClose = (clickFunc, icon) => {
  return (
    <div className="header__profile-close d-flex align-items-center" onClick={clickFunc}>
      {icon}
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} name - The URL to link to
 * @param {JSX.Element} tagname - The URL to link to
 * @param {string} avatar - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderProfileInformation = (avatar, name, tagname) => {
  return (
    <div className="header__profile-person d-flex align-items-center">
      <img className="header__profile-person-avatar" src={avatar} alt="person" />
      <div>
        <h4 className="header__profile-person-name font-body1 color-white">
          {name}
        </h4>
        <p className="header__profile-person-tagname font-base">
          {tagname}
        </p>
      </div>
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} title - The URL to link to
 * @param {string} text - The URL to link to
 * @param {function} disconnectFunc - The URL to link to
 * @param {JSX.Element} icon - The icon to display
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderProfileDisconnect = (title, disconnectFunc, icon, text) => {
  return (
    <div className="header__profile-disconnect d-flex align-items-center justify-content-between">
      <p className="font-base">{title}</p>
      <p onClick={disconnectFunc} className="disconnect font-base color-white d-flex align-items-center">
        <span style={{ marginRight: 12 }}>
          {icon}
        </span>
        {text}
      </p>
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} addressClip - The URL to link to
 * @param {string} eth - The URL to link to
 * @param {string} usdt - The URL to link to
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderProfileWallet = (addressClip, eth, usdt) => {
  return (
    <div className="header__profile-wallet">
      <div className="header__profile-wallet-address d-flex align-items-center">
        <h4 className="font-base color-white">
          {addressClip}
        </h4>
        <span></span>
      </div>
      <div className="header__profile-count d-flex align-items-center justify-content-between">
        <div className="header__profile-wallet-eth font-body1 color-white">
          {eth} ETH
        </div>
        <div className="header__profile-wallet-usdt font-body1">
          ${usdt}
        </div>
      </div>
    </div>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} href - The URL to link to
 * @param {string} name - The URL to link to
 * @param {string} classes - The URL to link to
 * @param {JSX.Element} icon - The URL to link to
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderProfileNavItem = (href, name, icon, classes) => {
  return (
    <li className="nav__item d-flex align-items-center justify-content-between">
      <a href={href} className={`nav__link ${classes}`}>
        {name}
      </a>
      <div className="nav__arrow">
        {icon}
      </div>
    </li>
  )
}
/**
 * HeaderLogo component that returns a link with an icon
 * @param {string} href - The URL to link to
 * @param {string} text - The URL to link to
 * @param {string} classes - The URL to link to
 * @param {JSX.Element} icon - The URL to link to
 * @returns {JSX.Element} - A link with the given href and icon
 */
const HeaderDownloadButton = (href, classes, text, icon) => {
  return (
    <div className="w-100">
      <a href={href} className={`download__button header__menu-button w-100 font-button ${classes}`} >
        {text}
        {icon}
      </a>
    </div>
  )
}

// CLASSES FUNCTION
function ClassRemoveOrAdd(RemoveOrAdd, item) {
  if (RemoveOrAdd === "remove") {
    return item.classList.remove("active")
  } else {
    return item.classList.add("active")
  }
}

class Classes {

  static WidgetRemove(items) {

    items.forEach((item) => {
      item.classList.remove("flash");
      item.classList.remove("animated");
    });

  }

  static WidgetAdd(items) {

    items.forEach((item) => {
      item.classList.add("flash");
      item.classList.add("animated");
    });

  }
}

/**
 * Header component - the main header component with navigation and user information
 * @returns {JSX.Element} - the header element
 */
const Header = () => {
  const [isUserRegistered, setisUserRegistered] = useState(false);
  const initialState = {
    walletAddress: "",
    walletBalance: undefined,
    walletUSDTBalance: undefined,
    walletAvatar: "",
    walletStatus: "",
    walletName: "loading...",
    walletTagName: "loading...",
    walletAddressClip: "loading...",
  };
  const [profile, setProfile] = useState(initialState);

  /**
   * fetchProfileData function - fetches user profile data from the API
   * @returns {Promise} - the promise of the API request
   */
  const fetchProfileData = async () => {
    try {
      const address = localStorage.getItem("userAddress");
      if (!address) {
        window.location = "/connectWallet";
        return;
      } else {
        setisUserRegistered(true);
      }
      const EnmApi = Moralis.EvmApi
      const responseAddress =
        await EnmApi.wallets.getWalletActiveChains({
          address: address,
        });

      const chain = responseAddress.raw.active_chains[0]?.chain,
        chainId = responseAddress.raw.active_chains[0]?.chain_id,
        defaultParams = {
          address: address,
          chain: chainId,
        }

      const balance = await EnmApi.balance.getNativeBalance(defaultParams);

      const name = await EnmApi.resolve.resolveAddress({
        address: address,
      });

      const resp = await EnmApi.nft.getWalletNFTs(defaultParams);

      const formattedBalance = parseFloat(balance.raw.balance) / 10 ** 18,

        walletName = name?.raw?.name || `${chain}_${chainId}`,

        walletTagName = `@${name?.raw?.name || chain + chainId}`,

        clipAddress = `${address.substring(0, 6)}...${address.slice(-4)}`,

        whatStatus = resp.raw ? resp.raw.status : "NO SYNCED",

        formaterClip = formattedBalance.toFixed(2),

        usdtBalance = (formaterClip * 2229).toFixed(2)

      let profileData = {
        walletAddress: address,
        walletBalance: formaterClip,
        walletUSDTBalance: usdtBalance,
        walletName,
        walletTagName,
        walletStatus: whatStatus,
        walletAddressClip: clipAddress
      };
      setProfile((prevProfile) => ({
        ...prevProfile,
        walletAddress: profileData.walletAddress,
        walletBalance: profileData.walletBalance,
        walletUSDTBalance: profileData.walletUSDTBalance,
        walletName,
        walletTagName,
        walletStatus: profileData.walletStatus,
        walletAddressClip: profileData.walletAddressClip,
      }));

      const defaultHeaders = {
        "Content-Type": "application/json",
      }

      await fetch("/api/profile", {
        method: "POST",
        headers: defaultHeaders,
        body: JSON.stringify(profileData),
      });

      const owners = await EnmApi.nft.getNFTOwners(defaultParams);

      const collections = await EnmApi.nft.getWalletNFTCollections(defaultParams);
      let collectionsJson = collections.jsonResponse.result;
      let ownedJson = owners.raw.result;

      if (ownedJson.length > 0) {
        let ownedData = [];
        ownedJson.map(async (owned) => {
          try {
            let ownedMetadata = JSON.parse(owned.metadata);
            ownedData.push({
              name: ownedMetadata.name,
              image: ownedMetadata.image,
            });
            console.log("All owned completed");
          } catch (error) {
            console.error("Error making request or parsing JSON:", error);
          }
        });
        await fetch("/owned/profile", {
          method: "POST",
          headers: defaultHeaders,
          body: JSON.stringify({
            ownedNFT: ownedData,
          }),
        });
      }
      if (collectionsJson.length > 0) {
        let collectionsData = [];
        await collectionsJson.map(async (collection) => {
          try {
            collectionsData.push(collection);
            console.log("All collection completed");
          } catch (error) {
            console.error("Error making request or parsing JSON:", error);
          }
        });
        await fetch("/collections/profile", {
          method: "POST",
          headers: defaultHeaders,
          body: JSON.stringify({
            collectionsNFT: collectionsData,
          }),
        });
      }
    } catch (error) {
      console.error("Header data resp", error);
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

    const clipAddress = `${address.substring(0, 6)}...${address.slice(-4)}`,
      randomNum = Math.floor(Math.random() * randomAvatars.length),
      selectedAvatar = randomAvatars[randomNum];

    setProfile((prevProfile) => ({
      ...prevProfile,
      walletAddress: address,
      walletAddressClip: clipAddress,
      walletAvatar: selectedAvatar,
    }));

  }, []);

  const burgerFunc = () => {
    let burger = document.querySelector(".header__burger"),
      nav = document.querySelector(".header__nav"),
      navItem = document.querySelectorAll(".nav__item"),
      body = document.getElementsByTagName("body")[0];

    if (burger.classList.contains("active")) {

      ClassRemoveOrAdd("remove", burger)
      ClassRemoveOrAdd("remove", nav)
      Classes.WidgetRemove(navItem)
      body.classList.remove('overflow-hidden');

    } else {

      ClassRemoveOrAdd("add", burger)
      ClassRemoveOrAdd("add", nav)
      Classes.WidgetAdd(navItem)
      body.classList.add('overflow-hidden');

    }
  };

  function profileWidget() {
    let element = document.querySelector(".header__profile"),
      bg = document.querySelector(".header__profile-background");

    ClassRemoveOrAdd("add", element)
    ClassRemoveOrAdd("add", bg)
  }
  function profileClose() {
    let element = document.querySelector(".header__profile"),
      bg = document.querySelector(".header__profile-background");

    if (element.classList.contains('active') && bg.classList.contains('active')) {
      ClassRemoveOrAdd("remove", element)
      ClassRemoveOrAdd("remove", bg)
    }
  }
  const disconnectApi = async () => {
    window.location = "/connectWallet";
  };

  return (
    <header className="header wrapper">
      <div className="d-flex align-items-center justify-content-between">

        {HeaderLogo("/", Icons.IconLogo)}

        {isUserRegistered ? HeaderWidgets("header__create header__widget bled-mode pointer", Icons.IconCreate) : ""}
        {isUserRegistered ? HeaderWidgets("header__flash header__widget pointer", Icons.IconFlash) : ""}

        {isUserRegistered ? (
          <>
            {HeaderAvatar(profileWidget, profile.walletAvatar)}

            <div className="header__profile-background position-fixed">

              {HeaderProfileClose(profileClose, Icons.IconClose)}

              <div className="header__profile-content d-flex justify-content-between flex-column">
                <div>

                  {HeaderProfileInformation(profile.walletAvatar, profile.walletName, profile.walletTagName)}
                  {HeaderProfileDisconnect("Connecting Wallet", disconnectApi, Icons.IconDisconnect, "Disconnect")}
                  {HeaderProfileWallet(profile.walletAddressClip, profile.walletBalance, profile.walletUSDTBalance)}

                </div>

                <ul>

                  {HeaderProfileNavItem("/profile", "My profile", useApiArrow, "font-body1 fw-800")}
                  {HeaderProfileNavItem("/profile/settings", "Settings", useApiArrow, "font-body1 fw-800")}
                  {HeaderProfileNavItem("/help", "Help", useApiArrow, "font-body1 fw-800")}

                </ul>
              </div>
            </div>
          </>
        ) : ""}

        <nav className="header__nav">
          <ul className="header__ul d-flex flex-column">

            {HeaderProfileNavItem("/discover", "Discover", useApiArrow, "font-h4")}
            {HeaderProfileNavItem("#", "Create", useApiArrow, "font-h4")}
            {HeaderProfileNavItem("#", "Feed", useApiArrow, "font-h4")}
            {HeaderProfileNavItem("#", "Help center", useApiArrow, "font-h4")}
            {HeaderProfileNavItem("#", "Blog", useApiArrow, "font-h4")}
            {HeaderProfileNavItem("/connectWallet", "ConnectWallet", useApiArrow, "font-h4")}

          </ul>
          <p className="font-base">Download app</p>

          {HeaderDownloadButton("#", "", "apple store", Icons.IconAppleStore)}
          {HeaderDownloadButton("#", "white", "google play", Icons.IconGooglePlay)}

        </nav>

        <span className="header__burger bled-mode" onClick={burgerFunc}></span>

      </div>
    </header>
  );
};

export default Header;
