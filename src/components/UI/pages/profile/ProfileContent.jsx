import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import Created from "./Created";

const ProfileContentName = (name, status) => {
  return (
    <h4 className="profile__content-name font-h4 color-darken d-flex align-items-center flex-wrap">
      {name}

      <span
        className="font-caption color-darken"
        style={
          status !== "NO SYNCED"
            ? { fontWeight: 700 }
            : {
              fontWeight: 700,
              backgroundColor: "#ff001562",
            }
        }
      >
        {status}
      </span>
    </h4>
  )
}

const ProfileContentPictures = (bannerSrc, avatarSrc) => {
  return (
    <>
      <img loading="lazy" data-src={bannerSrc} src={bannerSrc} alt="" className="profile__banner w-100 h-100" />
      <img loading="lazy" data-src={avatarSrc} src={avatarSrc} alt="" className="profile__avatar" />
    </>
  )
}

const ProfileContentWallet = (tagname, copyFunc, addressClip) => {
  return (
    <div className="profile__content-wallet d-flex align-items-center flex-wrap">
      <p className="profile__content-tagname font-body2-bold">
        {tagname}
      </p>
      <div className="profile__content-address pointer font-base color-darken" onClick={copyFunc}>
        {addressClip}
        {Picture.IconCopy}
      </div>
    </div>
  )
}

const ProfileFollowButton = (clickFunc) => {
  return (
    <div onClick={clickFunc} className="profile__follow pointer font-button color-darken d-flex align-items-center">
      follow
      {Picture.IconPlus}
    </div>
  )
}

const ProfileSub = (blockClass, count, text) => {
  return (
    <div className={`${blockClass} profile__sub`}>
      <h4 className="profile__sub-count font-h4">
        {count}
      </h4>
      <div className="profile__sub-info font-base d-flex align-items-center">
        {Picture.IconUser}
        {text}
      </div>
    </div>
  )
}

const ProfileBio = (info) => {
  return (
    <div className="profile__infos-bio">
      <span className="profile__bio-title profile__infos-title font-button">
        bio
      </span>
      <p className="profile__bio-info font-caption">
        {info}
      </p>
    </div>
  )
}

const ProfileContent = () => {
  const initialState = {
    walletAddress: "",
    walletBalance: undefined,
    walletAvatar: "",
    walletStatus: "load...",
    walletName: "loading...",
    walletTagName: "loading...",
    walletAddressClip: "loading...",
  };

  const [profile, setProfile] = useState(initialState),
    [profileFollowers, setProfileFollowers] = useState(0),
    [profileFollowing, setProfileFollowing] = useState(0),
    [profileState, setProfileState] = useState(false);


  useEffect(() => {
    setProfileFollowing, profileState;
    const fetchProfileDataFromServer = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const profileData = await response.json();

        setProfile((prevProfile) => ({
          ...prevProfile,
          walletAddress: profileData.walletAddress,
          walletBalance: profileData.walletBalance,
          walletName: profileData.walletName,
          walletUSDTBalance: profileData.walletUSDTBalance,
          walletTagName: profileData.walletTagName,
          walletStatus: profileData.walletStatus,
          walletAddressClip: profileData.walletAddressClip,
        }));

        console.log("Profile Data from Server:", profileData);
      } catch (error) {
        console.error("Profile Data error:", error);
      }
    };
    fetchProfileDataFromServer();
  }, []);

  useEffect(() => {
    const followBtn = document.querySelector(".profile__follow");
    const followBtnSvg = document.querySelector(".profile__follow svg");

    const followState = localStorage.getItem("state");
    followState ? setProfileState(followState) : setProfileState(0);

    switch (followState) {
      case "true":
        followBtn.classList.add("active");
        followBtn.textContent = "following";
        if (followBtnSvg) followBtnSvg.remove();
        break;
      case "false":
        followBtn.textContent = "follow";
        if (followBtn.classList.contains("active")) {
          followBtn.classList.remove("active");
        }
        break;
      case "settings":
        followBtn.textContent = "settings";
        setProfileState("settings");
        if (followBtnSvg) followBtnSvg.remove();
        break;
      default:
        break;
    }

    const initialValue = localStorage.getItem("count");
    if (initialValue) setProfileFollowers(Number(initialValue));

    const randomAvatars = [
      "https://i.seadn.io/gcs/files/e682d6a6f6e2c46ad24a518b860d3296.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/d5c725ebe84f336783c345eb8afee8ab.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/587e816f1e9179a1a52b1b5860f9b041.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/4117ce1382f8589e426b193262f6d4d0.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/655544134798d3f69544847cdfbd4470.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/b4c26b761119253921aacf43a6ea3727.png?auto=format&dpr=1&w=1000",
      "https://i.seadn.io/gcs/files/e130b0b0bd3ca7f3ef974149e11d74f1.png?auto=format&dpr=1&w=1000",
    ];
    const randomNum = Math.floor(Math.random() * randomAvatars.length);
    const selectedAvatar = randomAvatars[randomNum];
    const address = localStorage.getItem("userAddress");
    setProfile((prevProfile) => ({
      ...prevProfile,
      walletAddress: address,
      walletAddressClip: `${address.substring(0, 6)}...${address.slice(-4)}`,
      walletAvatar: selectedAvatar,
    }));

    if (profile.walletAddress === localStorage.userAddress) {
      followBtn.textContent = "Settings";
      localStorage.setItem("state", "settings");
      setProfileState("settings");
      if (followBtnSvg) followBtnSvg.remove();
      if (followBtn.classList.contains("active")) {
        followBtn.classList.remove("active");
      }
    }
  }, [profile.walletAddress]);

  const copyToClipboard = async () => {
    try {
      let clipboard = document.querySelector(".profile__content-address");
      await navigator.clipboard.writeText(profile.walletAddress);
      clipboard.style.backgroundColor = "#00ffbf";
      setTimeout(() => {
        clipboard.style.backgroundColor = "";
      }, 1000);
    } catch (error) {
      alert("Error copying to clipboard:", error);
    }
  };

  const followProfile = () => {
    const followBtn = document.querySelector(".profile__follow");
    const followBtnSvg = document.querySelector(".profile__follow svg");

    switch (localStorage.state) {
      case "false":
        if (followBtnSvg) {
          followBtnSvg.remove();
        }

        setProfileFollowers((prevCount) => {
          const newCount = Number(prevCount) + 1;
          localStorage.setItem("count", newCount);
          return newCount;
        });

        followBtn.classList.add("active");
        followBtn.textContent = "following";

        setProfileState(() => {
          localStorage.setItem("state", true);
          return true;
        });
        break;
      case "true":
        followBtn.classList.remove("active");
        followBtn.textContent = "follow";

        setProfileFollowers((prevCount) => {
          const newCount = Number(prevCount) - 1;
          localStorage.setItem("count", newCount);
          return newCount;
        });

        setProfileState(() => {
          localStorage.setItem("state", false);
          return false;
        });
        break;
      case "settings":
        document.location = "/profile/settings";
        break;
      default:
        break;
    }
  };

  return (
    <div className="profile__info position-absolute w-100" style={{ maxWidth: 470 }}>
      <div className="profile__content position-relative w-100">

        {ProfileContentPictures(Picture.IBanner, profile.walletAvatar)}

        <div className="profile__content-info">
          <div className="profile__content-content">

            {ProfileContentName(profile.walletName, profile.walletStatus)}

            {ProfileContentWallet(profile.walletTagName, copyToClipboard, profile.walletAddressClip)}

            {ProfileFollowButton(followProfile)}

            <div className="profile__content-subs d-flex align-items-center w-100">

              {ProfileSub("profile__following", profileFollowing, "Following")}
              {ProfileSub("profile__followers", profileFollowers, "Followers")}

            </div>
            <div className="profile__infos">
              {ProfileBio("We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey.")}
            </div>
          </div>
        </div>
      </div>
      <Created />
    </div>
  );
};

export default ProfileContent;
