import React, { useState, useEffect, useRef } from "react";
import IBanner from "./ProfileImg";
import Created from "./Created";

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

  const [profile, setProfile] = useState(initialState);
  const [profileFollowers, setProfileFollowers] = useState(0);
  const [profileFollowing, setProfileFollowing] = useState(0);
  const [profileState, setProfileState] = useState(false);

  const profileInfoRef = useRef(
    "We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey."
  );

  useEffect(() => {
    setProfileFollowing()
    profileState()
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
    if (followState) setProfileState(followState);

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
    <div
      className="profile__info position-absolute w-100"
      style={{ maxWidth: 470 }}
    >
      <div className="profile__content position-relative w-100">
        <img
          loading="lazy"
          data-src={IBanner}
          src={IBanner}
          alt=""
          className="profile__banner w-100 h-100"
        />
        <img
          loading="lazy"
          data-src={profile.walletAvatar}
          src={profile.walletAvatar}
          alt=""
          className="profile__avatar"
        />
        <div className="profile__content-info">
          <div className="profile__content-content">
            <h4 className="profile__content-name font-h4 color-darken d-flex align-items-center flex-wrap">
              {profile.walletName}

              <span
                className="font-caption color-darken"
                style={
                  profile.walletStatus !== "NO SYNCED"
                    ? { fontWeight: 700 }
                    : {
                        fontWeight: 700,
                        backgroundColor: "#ff001562",
                      }
                }
              >
                {profile.walletStatus}
              </span>
            </h4>
            <div className="profile__content-wallet d-flex align-items-center flex-wrap">
              <p className="profile__content-tagname font-body2-bold">
                {profile.walletTagName}
              </p>
              <div
                className="profile__content-address pointer font-base color-darken"
                onClick={copyToClipboard}
              >
                {profile.walletAddressClip}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33398 4.2062C8.38667 3.87637 8.46532 3.58702 8.57372 3.33366C9.1413 2.00703 10.4173 1.66699 13.268 1.66699C17.5007 1.66699 18.334 3.33366 18.334 6.74541C18.334 9.16699 18.1482 11.0007 16.6673 11.4675C16.4173 11.5463 16.1303 11.6101 15.801 11.667"
                    stroke="#202025"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.49935 18.3337C11.666 18.3337 13.3327 17.0837 13.3327 12.5003C13.3327 7.91699 11.666 6.66699 7.49935 6.66699C3.33268 6.66699 1.66602 7.63921 1.66602 12.5003C1.66602 17.3614 3.33268 18.3337 7.49935 18.3337Z"
                    stroke="#202025"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.83333 7.5C5.83333 7.5 6.33714 9.49619 5.41667 10.4167C4.49619 11.3371 2.5 10.8333 2.5 10.8333"
                    stroke="#202025"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              onClick={followProfile}
              className="profile__follow pointer font-button color-darken d-flex align-items-center"
            >
              follow
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="#202025"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18L12 6"
                  stroke="#202025"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="profile__content-subs d-flex align-items-center w-100">
              <div className="profile__following profile__sub">
                <h4 className="profile__sub-count font-h4">
                  {profileFollowing}
                </h4>
                <div className="profile__sub-info font-base d-flex align-items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6673 15.4167C16.6673 16.6912 13.8102 17.5 10.0007 17.5C6.19113 17.5 3.33398 16.6912 3.33398 15.4167C3.33398 13.5577 6.66732 12.5 10.0007 12.5C13.334 12.5 16.6673 13.75 16.6673 15.4167Z"
                      stroke="#686A6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z"
                      stroke="#686A6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Following
                </div>
              </div>
              <div className="profile__followers profile__sub">
                <h4 className="profile__sub-count font-h4">
                  {profileFollowers}
                </h4>
                <div className="profile__sub-info font-base d-flex align-items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6673 15.4167C16.6673 16.6912 13.8102 17.5 10.0007 17.5C6.19113 17.5 3.33398 16.6912 3.33398 15.4167C3.33398 13.5577 6.66732 12.5 10.0007 12.5C13.334 12.5 16.6673 13.75 16.6673 15.4167Z"
                      stroke="#686A6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z"
                      stroke="#686A6C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Followers
                </div>
              </div>
            </div>
            <div className="profile__infos">
              <div className="profile__infos-bio">
                <span className="profile__bio-title profile__infos-title font-button">
                  bio
                </span>
                <p className="profile__bio-info font-caption">
                  {profileInfoRef.current}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Created />
    </div>
  );
};

export default ProfileContent;
