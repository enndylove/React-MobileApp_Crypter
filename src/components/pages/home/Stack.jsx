import { Animated } from "react-animated-css";
import StackSlide from "../../UI/pages/home/Stackslide";
import Icons from "./Icons/IconsStack"

const StackTitleBlock = (title, iconLeftArrow, iconRigthArrow) => {
  return (
    <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={500}>
      <div className="stack__title-block">
        <h3 className="stack__title font-h3">
          {title}
        </h3>
        <div className="stack__button-block d-flex">
          <div className="stack__button stack__prev-btn deactive">
            {iconLeftArrow}
          </div>
          <div className="stack__button stack__next-btn">
            {iconRigthArrow}
          </div>
        </div>
      </div>
    </Animated>
  )
}

const Stack = () => {
  return (
    <section className="section stack default-padding">

      {StackTitleBlock("Curated collections.", Icons.IconLeftArrow, Icons.IconRigthArrow)}

      <StackSlide />

      <div className="stack__progressbar"><span></span></div>

    </section>
  );
};

// stackSlider.scrollLeft = 100;

export default Stack;
