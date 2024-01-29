import { useState } from "react";
import Icons from './Icons';

class ImageFactory {
  static defaultImage = "https://i.ibb.co/PWhrW7k/Frame-1361.jpg"
  static loadImage(url) {
    return url ? URL.createObjectURL(url) : this.defaultImage
  }
}

const ContentMenu = (href, name) => {
  return (
    <li className="content__menu-item w-100">
      <a href={href} className="content__menu-link font-body1 w-100 d-flex align-items-center justify-content-between">
        {name}
        {Icons.IconArrow}
      </a>
    </li>
  )
}
const PhotosBLock = (classImages, htmlFor, image, setImages, title, info) => {
  return (
    <div className="content__photos-block">

      <div className={classImages}>
        <img className="content__photos-image w-100 h-100" alt="image not faund" src={ImageFactory.loadImage(image)} />
        {image !== null ? (
          <button className="content__photos-button" onClick={() => setImages(null)}>
            {Icons.IconClose}
          </button>
        ) : (<></>)}

      </div>
      <div className="content__photos-text">
        <p className="font-body2-bold color-darken">
          {title}
        </p>
        <span className="content__photos-image-size font-base">
          {info}
        </span>
      </div>

      <label htmlFor={htmlFor} className="content__photos-upload pointer font-button color-darken">
        upload
      </label>
      <input
        type="file"
        id={htmlFor}
        name="image_target"
        className="d-none"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImages(event.target.files[0]);
        }}
      />
    </div>
  )
}

const Content = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  function saveSettingsFunc() {

  }

  return (
    <section className="section content w-100">

      <h2 className="content__title font-h2">
        Settings
      </h2>
      <div onClick={saveSettingsFunc} className="content__save pointer font-button color-white w-100 d-flex align-items-center justify-content-center">
        save
        {Icons.IconSave}
      </div>

      <nav className="content__menu w-100">
        <ul className="content__ul w-100">
          {ContentMenu("#profile", 'Profile')}
          {ContentMenu("#wallet", 'Wallet')}
          {ContentMenu("#notification", 'Notification')}
        </ul>
      </nav>

      <div className="content__photos-blocks">
        {PhotosBLock('content__avatar-images position-relative', 'avatarInput', avatarImage, setAvatarImage, 'Profile photo', '500x500. Gifs work too.')}
        {PhotosBLock('content__banner-images position-relative', 'bannerInput', bannerImage, setBannerImage, 'Banner photo', '740x304. Gifs work too.')}
      </div>

    </section>
  );
};


export default Content
