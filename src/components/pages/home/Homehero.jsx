import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";

import Icons from './Icons/IconsHomehero'
import HomeheroBank from "../../../image/pages/home/homehero.webp";

const HomeHeroStart = (title, iconArrow, hrefArrow, info, hrefButton, textButton, iconPlaceholder) => {
  return (
    <section className="section default-padding wrapper">
      <h1 className="homehero__title font-h2 position-relative">
        {title.split("").map((char, index) => (
          <span key={index}>
            {char}
            {index === title.length - 1}
          </span>
        ))}
      </h1>
      <div className="homehero__arrow">
        <a className="homehero__arrow homehero__arrow-img" href={hrefArrow}>
          {iconArrow}
        </a>
      </div>
      <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={3000}>
        <p className="homehero__info font-body2">
          {info}
        </p>
      </Animated>
      <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={3000}>
        <div className="homehero__start">
          <a href={hrefButton} className="homehero__start font-button">
            {textButton}
            <span className="placeholder-img">
              {iconPlaceholder}
            </span>
          </a>
        </div>
      </Animated>
    </section>
  )
}

const HomeHeroInfoContent = (firstTitle, firstInfo, secondTitle, secondInfo, placeholderImage) => {
  return (
    <div className="homehero__info-content d-flex align-items-center m-auto">
      <div className="homehere__info-block">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <h5 className="homehero__info-title font-base">
            {firstTitle}
          </h5>
          <p className="homehero__info-info font-base">
            <span className="placeholder-img" style={{ marginRight: 12 }}>
              {placeholderImage}
            </span>
            {firstInfo}
          </p>
        </Animated>
      </div>

      <div className="homehere__info-block">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <h5 className="homehero__info-title font-base">
            {secondTitle}
          </h5>
          <p className="homehero__info-info font-base">
            <span className="placeholder-img" style={{ marginRight: 12 }}>
              {placeholderImage}
            </span>
            {secondInfo}
          </p>
        </Animated>
      </div>
    </div>
  )
}
const HomeHeroBttContent = (bttTitle, firstBtnText, hrefFirstBtn, secondBtnText, hrefSecondBtn) => {
  return (
    <div className="homehero__btt">
      <Animated className="wow" animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
        <h3 className="homehero__btt-title font-h3">
          {bttTitle}
        </h3>
      </Animated>
      <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
        <div className="homehero__btn-block d-flex align-items-center flex-column w-100">
          <a href={hrefFirstBtn} className="w-100 homehero__btt-btn font-button">
            {firstBtnText}
          </a>
          <a href={hrefSecondBtn} className="w-100 homehero__btt-btn fill font-button">
            {secondBtnText}
          </a>
        </div>
      </Animated>
    </div>
  )
}


const HomeHero = () => {
  const [text, setText] = useState("");
  const title = "Curated Artwork.";

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index < title.length) {
          const currentChar = title[index];
          index++;
          return prevText + currentChar;
        } else {
          clearInterval(intervalId);
          return prevText;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section homehero">

      {HomeHeroStart(
        text,
        Icons.IconArrow,
        "#",
        "We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.",
        "#",
        "start your search",
        Icons.IconPlaceholder
      )}

      <section className="section">

        <Animated className="wow" animation="fadeIn" isVisible={true} animationInDuration={3000}>
          <img className="homehero__bank-png" data-src={HomeheroBank} alt="" />
        </Animated>

        <div className="default-padding homehero__content">

          {HomeHeroInfoContent("Collection", "Escape II", "Buy now", "10.00 ETH", Icons.IconPlaceholder)}
          {HomeHeroBttContent("The creator network.", "View NFT", "#", "place a bid", "#")}

        </div>

      </section>

    </section>
  );
};

export default HomeHero;
