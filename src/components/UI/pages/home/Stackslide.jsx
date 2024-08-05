import { useEffect } from "react";
import StackSlideBlock from "./components/StackSlideBlock";

import Picture from "./Picture/PictureStack";
/**
 * StackSlide component
 *
 * A React component that renders a stack of slides with navigation buttons.
 *
 * @returns {JSX.Element} The StackSlide component
 */
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

/**
 * StackSlideButtons function
 *
 * A function that sets up the navigation buttons for the StackSlide component.
 *
 * @example
 * StackSlideButtons();
 */
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
};

let stackPrevBtn, stackNextBtn, stackSlider, stackBlock, stackActiveBlock;

export default StackSlide;