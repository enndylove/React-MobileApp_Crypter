import { Animated } from "react-animated-css";
import PostBgImage from "../../../image/pages/home/auction/bg-img-post.webp";
import TagAutor from "../../UI/pages/home/TagAutor";
import { useEffect } from "react";

let auctionPriceUsdt, auctionPrice;
auctionPrice = 8.0;
auctionPriceUsdt = auctionPrice * 3079.35;

/**
 * AuctionTextContent component
 *
 * @param {string} title - The title of the auction text content
 * @param {string} hrefBtn - The href of the button
 * @param {string} btnText - The text of the button
 * @param {number} btnCount - The count of the button
 * @returns {JSX.Element} The auction text content component
 * @example
 * AuctionTextContent("Auctions ending soon", "#", "Explore more", 109)
 */
const AuctionTextContent = (title, hrefBtn, btnText, btnCount) => {
  return (
      <div className="auction__text-content default-padding">
        <Animated className="wow" animationIn="fadeInUp" isVisible={true} animationInDuration={1000}>
          <h3 className="auction__text-title font-h3">
            {title}
          </h3>
        </Animated>

        <div className="auction__btn-wrapper">
          <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
            <a href={hrefBtn} className="auction__text-btn font-button">
              {btnText}
              <span className="auction__btn-list font-button">{btnCount}</span>
            </a>
          </Animated>
        </div>
      </div>
  )
}

/**
 * AuctionPost component
 *
 * @param {string} PostImage - The image of the auction post
 * @param {number} eth - The ETH price of the auction
 * @param {number} usdt - The USDT price of the auction
 * @param {number} hrs - The hours remaining for the auction
 * @param {number} min - The minutes remaining for the auction
 * @param {number} sec - The seconds remaining for the auction
 * @returns {JSX.Element} The auction post component
 * @example
 * AuctionPost(PostBgImage, 8.0, 24592.80, 23, 59, 59)
 */
const AuctionPost = (PostImage, eth, usdt, hrs, min, sec) => {
  return (
      <div className="auction__post position-relative">
        <img data-src={PostImage} className="auction__post-img position-absolute" />

        <div className="auction__post-content w-100 position-absolute d-flex flex-column justify-content-between">
          {TagAutor('', '@randomdash')}
          <div className="auction__post-info d-flex justify-content-between w-100">
            <div className="auction__info-block">
              <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={600}>
                <p className="auction__price-sub font-base color-white">
                  Current bid
                </p>
              </Animated>
              <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={800}>
                <h5 className="auction__price font-h4 color-white">
                  {eth.toFixed(2)} ETH
                </h5>
              </Animated>
              <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <p className="auction__price-usdt font-base color-white">
                  $ {usdt.toFixed(2)}
                </p>
              </Animated>
            </div>

            <div className="auction__info-block auction__time-content w-100">
              <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={600}>
                <p className="auction__price-sub font-base color-white">
                  Auction ends in
                </p>
              </Animated>
              <div className="auction__time-block d-flex align-items-center justify-content-between w-100">
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={800}>
                  <div className="auction__time-hrs auction__time">
                    <h5 className="auction__price font-h4 color-white auction__hrs">
                      {hrs}
                    </h5>
                    <p className="auction__price-usdt font-base color-white">
                      hrs
                    </p>
                  </div>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={900}>
                  <div className="auction__time-min auction__time">
                    <h5 className="auction__price font-h4 color-white auction__min">
                      {min}
                    </h5>
                    <p className="auction__price-usdt font-base color-white">
                      min
                    </p>
                  </div>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                  <div className="auction__time-sec auction__time">
                    <h5 className="auction__price font-h4 color-white auction__sec">
                      {sec}
                    </h5>
                    <p className="auction__price-usdt font-base color-white">
                      sec
                    </p>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

/**
 * Auction component
 *
 * @returns {JSX.Element} The auction component
 */
const Auction = () => {
  useEffect(() => {
    let auctionPost = document.querySelector(".auction__post");
    auctionPost.style.height = auctionPost.clientWidth + "px";

    setInterval(() => {
      let auctionHrs, auctionMin, auctionSec;
      auctionHrs = document.querySelector(".auction__hrs");
      auctionMin = document.querySelector(".auction__min");
      auctionSec = document.querySelector(".auction__sec");
      if (
          parseInt(auctionHrs.textContent)!== 0 ||
          parseInt(auctionMin.textContent)!== 0 ||
          parseInt(auctionSec.textContent)!== 0
      ) {
        if (parseInt(auctionSec.textContent) === 0) {
          if (
              parseInt(auctionMin.textContent) === 0 &&
              parseInt(auctionHrs.textContent)!== 0
          ) {
            parseInt(auctionHrs.textContent--);
            auctionMin.textContent = 59;
            auctionSec.textContent = 59;
          } else {
            parseInt(auctionMin.textContent--);
            auctionSec.textContent = 59;
          }
        } else {
          parseInt(auctionSec.textContent--);
        }
      }
    }, 1000);
  });

  return (
      <section className="section auction">
        {/* DINAMIC COUNT */}
        {AuctionTextContent("Auctions ending soon", "#", "Explore more", 109)}
        {/* DINAMIC POST */}
        {AuctionPost(PostBgImage, auctionPrice, auctionPriceUsdt, 23, 59, 59)}
      </section>
  );
};

export default Auction;