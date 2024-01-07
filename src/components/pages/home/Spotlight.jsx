import { Animated } from "react-animated-css";
import SpotBlocks from "../../UI/pages/home/Spotblocks";

const Spotlight = () => {
  return (
    <section className="section spotlight default-padding">
      <div className="spotlight__text-content">
        <Animated
          className="wow"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1000}
        >
          <h3 className="spotlight__title color-white font-h3">Spotlight.</h3>
        </Animated>
        <Animated
          className="wow"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1200}
        >
          <p className="spotlight__text-info font-body1">
            Projects you{'\''}ll love
          </p>
        </Animated>
        <div className="spotlight__tag-block d-flex w-100 flex-nowrap overflow-auto">
          <Animated
            className="wow"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1000}
          >
            <div className="spotlight__tag-content active font-base">
              1 days
            </div>
          </Animated>
          <Animated
            className="wow"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1200}
          >
            <div className="spotlight__tag-content font-base">7 days</div>
          </Animated>
          <Animated
            className="wow"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1400}
          >
            <div className="spotlight__tag-content font-base">30 days</div>
          </Animated>
        </div>
      </div>
      <SpotBlocks />
      <div className="spotlight__btn-wrapper d-flex justify-content-center">
        <Animated
          className="wow"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1000}
        >
          <a href="#" className="auction__text-btn font-button">
            explorer more
            <span className="auction__btn-list font-button">109</span>
          </a>
        </Animated>
      </div>
    </section>
  );
};

setTimeout(() => {
  let spotlightTag;
  spotlightTag = document.querySelectorAll(".spotlight__tag-content");

  // tags-target
  spotlightTag.forEach((item) => {
    item.addEventListener("click", () => {
      let activeTag = document.querySelector(".spotlight__tag-content.active");
      if (!item.classList.contains("active")) {
        activeTag.classList.remove("active");
        item.classList.add("active");
      }
    });
  });
}, 1000);

export default Spotlight;
