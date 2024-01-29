import { Animated } from "react-animated-css";
import Icons from "./Icons/IconsHotNFT";
import BioNFTblock from "../../UI/pages/home/Bionftblock";

const HotNFTMain = (title, hrefArrow, iconArrow, info, hrefButton, textButton) => {
  return (
    <section className="section hotnft">
      <div className="hotnft__text default-padding">
        <Animated className="wow" animationIn="fadeInUp" isVisible={true} animationInDuration={1000}>
          <h3 className="hotnft__title font-h3">
            {title}
          </h3>
        </Animated>

        <div className="hotnft__arrow-link d-flex">
          <Animated className="wow" animationIn="fadeInLeft" isVisible={true} animationInDuration={1000}>
            <a href={hrefArrow} className="">
              {iconArrow}
            </a>
          </Animated>
        </div>
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <p className="hotnft__info font-body2">
            {info}
          </p>
        </Animated>
      </div>
      <BioNFTblock />
      <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
        <div className="hotnft__btn font-button">
          <a href={hrefButton} className="">
            {textButton}
          </a>
        </div>
      </Animated>
    </section>
  )
}

const HotNFT = () => {
  return (
    <>
      {HotNFTMain(
        "Hot NFT artists of the month.",
        "#",
        Icons.IconArrow,
        "We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.",
        "#",
        "EXPLORE MORE"
      )}
    </>
  );
};

export default HotNFT;
