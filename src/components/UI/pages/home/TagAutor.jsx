import { Animated } from "react-animated-css";
import ImageFeaturedTagname from "../../../../image/pages/home/bionft/bionft1.webp";

/**
 * A utility class for handling avatars.
 */
class setAvatar {
  /**
   * The default avatar image.
   * @type {string}
   */
  static defaultAvatar = ImageFeaturedTagname;

  /**
   * Loads an avatar image from the given source. If the source is empty, returns the default avatar.
   * @param {string} src - The source of the avatar image.
   * @returns {string} The loaded avatar image.
   * @example
   * const avatarSrc = '';
   * const loadedAvatar = setAvatar.loadAvatar(avatarSrc);
   * console.log(loadedAvatar); // ImageFeaturedTagname
   */
  static loadAvatar(src) {
    return src != '' ? src : ImageFeaturedTagname;
  }
}

/**
 * A functional component that renders a tag author with an animated avatar.
 * @param {string} avatarSrc - The source of the avatar image.
 * @param {string} tagname - The name of the tag author.
 * @returns {JSX.Element} The rendered tag author component.
 * @example
 * const avatarSrc = 'https://example.com/avatar.jpg';
 * const tagname = 'John Doe';
 * const tagAuthor = TagAutor(avatarSrc, tagname);
 * console.log(tagAuthor); // <Animated>...</Animated>
 */
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