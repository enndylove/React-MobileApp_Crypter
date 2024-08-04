import { useState } from "react";
import Icons from './Icons'
import { useEffect } from "react";

const getTypeIcon = (typeIcon) => {
  switch (typeIcon.toLowerCase()) {
    case 'email':
      return Icons.IconEmail;
    case 'user':
      return Icons.IconUser;
    case 'link':
      return Icons.IconLink;
    case 'twitter':
      return Icons.IconTwitter;
    case 'facebook':
      return Icons.IconFacebook;
    default:
      return Icons.IconLink;
  }
};

const SettingInputs = (value, setValue, typeIcon, type, suptitle) => {
  const icon = getTypeIcon(typeIcon);

  return (
    <div className="setting__input-block">
      <div className="setting__input-content d-flex align-items-center justify-content-between">
        <input className="setting__input font-base color-darken"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type={type} />
        {icon}
      </div>
      <span className="setting__suptitle font-caption fw-800">
        {suptitle}
      </span>
    </div>
  )
}
const SettingTextarea = (title, icon, value, setValue, textareaClass, name, maxLength, minLength, suptitle) => {
  return (
    <div className="setting__input-block">
      <div className="setting__input-content d-flex align-items-center justify-content-between" style={{ borderBottom: 'none' }}>
        <h6 className="setting__input font-base color-darken">
          {title}
        </h6>
        {icon}
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={textareaClass}
        name={name}
        maxLength={maxLength}
        minLength={minLength} >
      </textarea>
      <span className="setting__suptitle font-caption fw-800">
        {suptitle}
      </span>
    </div>
  )
}
const SettingWallet = (clipAddress, copyFunc) => {
  return (
    <div className="setting__input-block">
      <div className="setting__wallet-content d-flex align-items-center">
        <div className="setting__wallet-img blue">
          {Icons.IconEth}
        </div>
        <div className="setting__wallet-text">
          <div className="setting__wallet-address-block d-flex align-items-center pointer" onClick={copyFunc}>
            <span className="setting__wallet-address font-base color-darken">
              {clipAddress}
            </span>
            <div className="setting__wallet-copy">
              {Icons.IconCopy}
            </div>
          </div>
          <span className="setting__wallet-chain font-caption fw-800 position-relative">
            Ethereum
          </span>
        </div>
      </div>
    </div>
  )
}

const SettingNotification = (name, desc, func) => {
  return (
    <div className="setting__input-block w-100">
      <div className="setting__notification-block d-flex w-100 justify-content-between">
        <div className="setting__notification-text w-100">
          <h6 className="setting__notification-name font-body2-bold color-darken">
            {name}
          </h6>
          <p className="setting__notification-desc font-caption">
            {desc}
          </p>
        </div>
        <div className="setting__notification-button position-relative pointer" onClick={func}></div>
      </div>
    </div>
  )
}

const Setting = () => {
  const [email, setEmail] = useState(''),
    [name, setName] = useState(''),
    [website, setWebsite] = useState(''),
    [twitter, setTwitter] = useState(''),
    [facebook, setFacebook] = useState('');

  const [bio, setBio] = useState('');

  const [address, setAddress] = useState(''),
    [addressClip, setAddressClip] = useState('');

  async function CopyAddress() {
    try {
      let target = document.querySelector('.setting__wallet-address-block')
      await navigator.clipboard.writeText(address);
      target.style.opacity = '.7'
      setTimeout(() => {
        target.style.opacity = '1'
      }, 1000);
    } catch (error) {
      alert("Error copying to clipboard:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch("/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!request.ok || !request.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await request.json();

        setName(data.walletName)

        setAddress(data.walletAddress);
        setAddressClip(data.walletAddressClip);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  function notificationFunc(e) {
    let target = e.target
    target.classList.toggle('active');
  }

  return (
    <section className="section setting">
      <div className="setting__block setting__information" id="#profile">
        <h6 className="setting__title setting__information-title font-button">
          Information
        </h6>
        <div className="setting__input-blocks">
          {/* blocks */}
          {SettingInputs(email, setEmail, 'Email', 'email', 'Email')}
          {SettingInputs(name, setName, 'user', 'text', 'Display name')}
          {/* blocks */}

          {/* TEXTAREA */}
          {SettingTextarea('About you', Icons.IconTextarea, bio, setBio, "setting__textarea font-caption color-darken w-100", name, 600, 0, 'Short bio')}
          {/* TEXTAREA */}
        </div>
      </div>

      <div className="setting__block setting__links">
        <h6 className="setting__title setting__links-title font-button">
          links
        </h6>
        <div className="setting__input-blocks">
          {/* blocks */}
          {SettingInputs(website, setWebsite, 'Link', 'text', 'Website')}
          {SettingInputs(twitter, setTwitter, 'Twitter', 'text', 'Twitter')}
          {SettingInputs(facebook, setFacebook, 'Facebook', 'text', 'Facebook')}
          {/* blocks */}
        </div>
      </div>

      <div className="setting__block setting__wallet" id="#wallet">
        <h6 className="setting__title setting__wallet-title font-button">
          wallet
        </h6>
        {/* blocks */}
        {SettingWallet(addressClip, CopyAddress)}
        {/* blocks */}
      </div>

      <div className="setting__block setting__notification w-100" id="#notification">
        <h6 className="setting__title setting__notification-title font-button">
          notification
        </h6>
        {/* blocks */}
        {SettingNotification("Auction notification", "Amet nesciunt voluptas quas cum sequi a pariatur harum", notificationFunc)}
        {SettingNotification("Buy now notification", "Dolorem vitae ratione aut assumenda accusamus.", notificationFunc)}
        {SettingNotification("Offer notification", "Qui nulla fuga omnis aperiam nostrum excepturi asperiores.", notificationFunc)}
        {SettingNotification("Crypter news", "Placeat quo qui cum ea nisi optio.", notificationFunc)}
        {/* blocks */}
      </div>

    </section>
  );
};


export default Setting
