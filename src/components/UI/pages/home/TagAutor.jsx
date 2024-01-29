import { Animated } from "react-animated-css";
import ImageFeaturedTagname from "../../../../image/pages/home/bionft/bionft1.webp";

class setAvatar {
  static defaultAvatar = ImageFeaturedTagname
  static loadAvatar(src) {
    return src != '' ? src : ImageFeaturedTagname
  }
}

const TagAutor = (avatarSrc, tagname) => {
  return (
    <Animated className="wow" animationIn="fadeInLeft" isVisible={true} animationInDuration={500}>
      <div className="featured__tagname-block d-flex align-items-center">
        <div className="featured__tagname-img-block">
          <img loading="lazy" data-src={setAvatar.loadAvatar(avatarSrc)} src={setAvatar.loadAvatar(avatarSrc)} alt="" className="featured__tagname-img" />
        </div>
        <h5 className="featured__tagname-name font-title">
          {tagname}
        </h5>
      </div>
    </Animated>
  );
};

export default TagAutor;
