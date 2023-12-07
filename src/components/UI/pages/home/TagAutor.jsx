import { Animated } from "react-animated-css";
import ImageFeaturedTagname from "../../../../image/pages/home/bionft/bionft1.webp";

const TagAutor = () => {
  return (
    <Animated
      className="wow"
      animationIn="fadeInLeft"
      isVisible={true}
      animationInDuration={500}
    >
      <div className="featured__tagname-block d-flex align-items-center">
        <div className="featured__tagname-img-block">
          <img
            data-src={ImageFeaturedTagname}
            alt=""
            className="featured__tagname-img"
          />
        </div>
        <h5 className="featured__tagname-name font-title">@randomdash</h5>
      </div>
    </Animated>
  );
};

export default TagAutor;
