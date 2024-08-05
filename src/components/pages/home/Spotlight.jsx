import { Animated } from "react-animated-css";
import SpotBlocks from "../../UI/pages/home/Spotblocks";

/**
 * Returns the text content for the spotlight section.
 *
 * @param {string} title - The title of the spotlight section.
 * @param {string} info - The info text for the spotlight section.
 * @returns {JSX.Element} The text content for the spotlight section.
 *
 * Example:
 * <SpotLightTextContent title="Spotlight." info="Projects you'll love" />
 */
const SpotLightTextContent = (title, info) => {
  return (
      <div className="spotlight__text-content">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <h3 className="spotlight__title color-white font-h3">{title}</h3>
        </Animated>
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
          <p className="spotlight__text-info font-body1">
            {info}
          </p>
        </Animated>
        <div className="spotlight__tag-block d-flex w-100 flex-nowrap overflow-auto">
          <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
            <div className="spotlight__tag-content active font-base">
              1 days
            </div>
          </Animated>
          <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
            <div className="spotlight__tag-content font-base">
              7 days
            </div>
          </Animated>
          <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
            <div className="spotlight__tag-content font-base">
              30 days
            </div>
          </Animated>
        </div>
      </div>
  )
}

/**
 * Returns the button for the spotlight section.
 *
 * @param {string} hrefButton - The href attribute for the button.
 * @param {string} textButton - The text for the button.
 * @param {number} numberButton - The number to display next to the button text.
 * @returns {JSX.Element} The button for the spotlight section.
 *
 * Example:
 * <SpotLightButton hrefButton="#" textButton="explorer more" numberButton={109} />
 */
const SpotLightButton = (hrefButton, textButton, numberButton) => {
  return (
      <div className="spotlight__btn-wrapper d-flex justify-content-center">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <a href={hrefButton} className="auction__text-btn font-button">
            {textButton}
            <span className="auction__btn-list font-button">{numberButton}</span>
          </a>
        </Animated>
      </div>
  )
}

/**
 * The main spotlight component.
 *
 * @returns {JSX.Element} The spotlight component.
 */
const Spotlight = () => {
  return (
      <section className="section spotlight default-padding">

        {SpotLightTextContent("Spotlight.", "Projects you'll love")}

        <SpotBlocks />

        {SpotLightButton("#", "explorer more", 109)}

      </section>
  );
};

/**
 * Adds event listeners to the spotlight tags.
 */
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