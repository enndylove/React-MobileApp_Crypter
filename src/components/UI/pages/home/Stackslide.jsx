import { useEffect } from "react";
import { Animated } from "react-animated-css";

import Picture from "./Picture/PictureStack";


const StackSlideBlock = (BigImageSrc, SmallImgSrc, name, avatarSrc, autorName, priceEth) => {
  const SmallImages = () => {
    if (SmallImgSrc && SmallImgSrc.length > 0) {
      if (!SmallImgSrc.length > 2) {
        SmallImgSrc.forEach(src => {
          return (
            <img loading="lazy" data-src={src} src={src} alt="" className="stack__sup-image" />
          )
        });
      } else {
        return (
          <>
            <img loading="lazy" data-src={SmallImgSrc[0]} src={SmallImgSrc[0]} alt="" className="stack__sup-image" />
            <img loading="lazy" data-src={SmallImgSrc[1]} src={SmallImgSrc[1]} alt="" className="stack__sup-image" />
          </>
        )
      }
    } else {
      return ""
    }
  }

  return (
    <div className="stack__slide-block w-100">
      <div className="stack__slide-images d-flex flex-column w-100 align-items-center">
        <div>
          <img loading="lazy" data-src={BigImageSrc} src={BigImageSrc} alt="" className="stack__slide-image" />
        </div>

        <div className="stack__sup-images d-flex w-100 justify-content-between align-items-center">
          {SmallImages()}
          <span className="stack__sup-more stack__sup-image d-flex align-items-center justify-content-center font-body1">
            +{SmallImgSrc.length}
          </span>
        </div>
      </div>

      <div className="stack__slide-content w-100">
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <div className="stack__slide-info d-flex justify-content-between">
            <p className="stack__slide-text font-body1">
              {name}
            </p>
            <p className="stack__slide-text greu font-title">
              Floor price
            </p>
          </div>
        </Animated>
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
          <div className="stack__slide-autor d-flex w-100 justify-content-between align-items-center">
            <span className="stack__autor-content font-title d-flex align-items-center">
              <div className="stack__autor-avatar-block">
                <img loading="lazy" className='stack__autor-avatar' data-src={avatarSrc} src={avatarSrc} alt="" />
              </div>
              {autorName}
            </span>
            <p className="stack__autor-price font-title">
              {parseInt(priceEth).toFixed(2)} ETH
            </p>
          </div>
        </Animated>

      </div>
    </div>
  )
}

const StackSlideButtons = () => {
  stackPrevBtn = document.querySelector(".stack__prev-btn");
  stackNextBtn = document.querySelector(".stack__next-btn");
  stackSlider = document.querySelector(".stack__slide-blocks");
  stackBlock = document.querySelectorAll(".stack__slide-block");
  stackBlock[0].classList.add("active");

  let stackProgressbar = document.querySelector(".stack__progressbar span");
  stackProgressbar.style.width = stackSlider.clientWidth / stackBlock.length + "px";
  stackProgressbar.style.marginLeft = 0 + "%";
  stackNextBtn.addEventListener("click", () => {
    stackActiveBlock = document.querySelector(".stack__slide-block.active");
    if (stackBlock[stackBlock.length - 1].classList.contains("active")) {
      stackNextBtn.classList.add("deactive");
      if (stackActiveBlock.nextElementSibling !== null) {
        stackActiveBlock.classList.remove("active");
      }
    } else {
      stackSlider.scrollLeft += stackBlock[0].clientWidth + 40;
      stackProgressbar.style.marginLeft = parseInt(stackProgressbar.style.marginLeft) + (100 / stackBlock.length) + "%";

      if (stackNextBtn.classList.contains("deactive")) {
        stackNextBtn.classList.remove("deactive");
      }
      if (stackActiveBlock.nextElementSibling !== null) {
        stackActiveBlock.nextElementSibling.classList.add("active");
        stackActiveBlock.classList.remove("active");
      }
    }
  });

  stackPrevBtn.addEventListener("click", () => {
    stackActiveBlock = document.querySelector(".stack__slide-block.active");
    if (stackBlock[0].classList.contains("active")) {
      stackPrevBtn.classList.add("deactive");
      if (stackActiveBlock.previousElementSibling !== null) {
        stackActiveBlock.classList.remove("active");
      }
    } else {
      stackSlider.scrollLeft -= stackBlock[0].clientWidth + 40;
      stackProgressbar.style.marginLeft = parseInt(stackProgressbar.style.marginLeft) - (100 / stackBlock.length) + "%";
      if (stackPrevBtn.classList.contains("deactive")) {
        stackPrevBtn.classList.remove("deactive");
      }
      if (stackActiveBlock.previousElementSibling !== null) {
        stackActiveBlock.previousElementSibling.classList.add("active");
        stackActiveBlock.classList.remove("active");
      }
    }
  });
}

const StackSlide = () => {
  useEffect(() => {
    StackSlideButtons()
  }, []);
  return (
    <div className="stack__slide-blocks d-flex flex-nowrap w-100 overflow-hidden">

      {StackSlideBlock(
        Picture.ImageSlide1Big,
        [Picture.ImageSlide1Small1, Picture.ImageSlide1Small2, Picture.ImageSlide1Small1, Picture.ImageSlide1Small2],
        "Cute Planet",
        Picture.ImageAutor1,
        "@tranmautritam",
        "1.0"
      )}
      {StackSlideBlock(
        Picture.ImageSlide2Big,
        [Picture.ImageSlide2Small1, Picture.ImageSlide2Small2],
        "UI8 all-access",
        Picture.ImageAutor1,
        "@randomdash",
        "1.2"
      )}
      {StackSlideBlock(
        Picture.ImageSlide3Big,
        [Picture.ImageSlide3Small1, Picture.ImageSlide3Small2, Picture.ImageSlide3Small1, Picture.ImageSlide3Small2, Picture.ImageSlide3Small1, Picture.ImageSlide3Small2, Picture.ImageSlide3Small1, Picture.ImageSlide3Small2, Picture.ImageSlide3Small1, Picture.ImageSlide3Small2],
        "Beyond the Dream",
        Picture.ImageAutor1,
        "@randomdash",
        "1.2"
      )}
      {StackSlideBlock(
        Picture.ImageSlide4Big,
        [Picture.ImageSlide4Small1, Picture.ImageSlide4Small2, Picture.ImageSlide4Small1, Picture.ImageSlide4Small2, Picture.ImageSlide4Small1, Picture.ImageSlide4Small2],
        "Beyond the Dream",
        Picture.ImageAutor1,
        "@randomdash",
        "1.2"
      )}

    </div>
  );
};

let stackPrevBtn, stackNextBtn, stackSlider, stackBlock, stackActiveBlock;

export default StackSlide;
