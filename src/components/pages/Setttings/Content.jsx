import { useState } from "react";
import Icons from './Icons';
import ContentMenu from "./components/ContentMenu";
import PhotosBLock from "./components/PhotosBlock";

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
        {PhotosBLock('content__avatar-images avatar position-relative', 'avatarInput', avatarImage, setAvatarImage, 'Profile photo', '500x500. Gifs work too.')}
        {PhotosBLock('content__banner-images banner position-relative', 'bannerInput', bannerImage, setBannerImage, 'Banner photo', '740x304. Gifs work too.')}
      </div>

    </section>
  );
};


export default Content
