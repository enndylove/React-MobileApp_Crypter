import { Animated } from "react-animated-css";

import Picture from './Picture/PictureBlog'

const BlogPost = (srcPicture, title, info, dotIcon, dotInfo, hrefBtn, textBtn) => {
  const IDotInfo = () => {
    if (dotInfo && dotInfo.length > 0) {
      return dotInfo.map((infoItem, index) => (
        <div key={index} className="blog__post-idot d-flex align-items-center">
          <Animated className="blog__idot wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
            {dotIcon}
          </Animated>
          <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
            <p className="blog__idot-info font-body2">
              {infoItem}
            </p>
          </Animated>
        </div>
      ));
    } else {
      return ""
    }
  };

  return (
    <div className="blog__post">
      <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
        <img loading="lazy" data-src={srcPicture} src={srcPicture} alt="" className="blog__post-img" />
      </Animated>

      <div className="blog__post-content">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <h3 className="blog__post-title font-h3">{title}</h3>
        </Animated>
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
          <p className="blog__post-info font-body2">{info}</p>
        </Animated>

        {IDotInfo()}

        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <div className="blog__btn-wrapp">
            <a href={hrefBtn} className="blog__btn font-button">
              {textBtn}
            </a>
          </div>
        </Animated>
      </div>
    </div>
  );
};

const BlogBlock = () => {
  return (
    <div className="blog__content">

      {BlogPost(
        Picture.IPost1,
        "Your Collection, your way.",
        "In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time.",
        Picture.IDot,
        [
          "Earn a 10% royalty for all secondary market",
          "Creativity is valuable on Crypter"
        ],
        "#",
        "learn more"
      )}

      {BlogPost(
        Picture.IPost2,
        "Lowest mint fees.",
        `Minting an NFT is like adding your signature to a painting. Make your mark in web3 with works that are emblematic of your creative practice.
         Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.`,
        Picture.IDot,
        [],
        "#",
        "learn more"
      )}

      {BlogPost(
        Picture.IPost3,
        "Create together, earn together.",
        `Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on.
         You can also use Splits to donate directly to the causes you care about most....`,
        Picture.IDot,
        [],
        "#",
        "learn more"
      )}

    </div>
  )
};

export default BlogBlock;
