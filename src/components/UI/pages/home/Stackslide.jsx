import React, { useEffect } from "react";
/* eslint-disable eqeqeq */
import {
  ImageSlide1Big,
  ImageSlide1Small1,
  ImageSlide1Small2,
  ImageSLide2Big,
  ImageSlide2Small1,
  ImageSlide2Small2,
  ImageSLide3Big,
  ImageSlide3Small1,
  ImageSlide3Small2,
  ImageSLide4Big,
  ImageSlide4Small1,
  ImageSlide4Small2,
} from "./StackslideImg";

import ImageAutor1 from "../../../../image/pages/home/bionft/bionft1.webp";

let slidesinfo = [
  {
    _bigimg: `${ImageSlide1Big}`,
    _smallimg1: `${ImageSlide1Small1}`,
    _smallimg2: `${ImageSlide1Small2}`,
    _num_more: "+4",
    _name: "Cute Planet",
    _floor_state: "Floor price",
    _autor_avatar: `${ImageAutor1}`,
    _autor_name: "@tranmautritam",
    _price_eth: "1.0",
  },
  {
    _bigimg: `${ImageSLide2Big}`,
    _smallimg1: `${ImageSlide2Small1}`,
    _smallimg2: `${ImageSlide2Small2}`,
    _num_more: "+8",
    _name: "UI8 all-access",
    _floor_state: "Floor price",
    _autor_avatar: `${ImageAutor1}`,
    _autor_name: "@randomdash",
    _price_eth: "1.2",
  },
  {
    _bigimg: `${ImageSLide3Big}`,
    _smallimg1: `${ImageSlide3Small1}`,
    _smallimg2: `${ImageSlide3Small2}`,
    _num_more: "+12",
    _name: "Beyond the Dream",
    _floor_state: "Floor price",
    _autor_avatar: `${ImageAutor1}`,
    _autor_name: "@randomdash",
    _price_eth: "1.2",
  },
  {
    _bigimg: `${ImageSLide4Big}`,
    _smallimg1: `${ImageSlide4Small1}`,
    _smallimg2: `${ImageSlide4Small2}`,
    _num_more: "+4",
    _name: "Beyond the Dream",
    _floor_state: "Floor price",
    _autor_avatar: `${ImageAutor1}`,
    _autor_name: "@randomdash",
    _price_eth: "1.2",
  },
];
let slideinfo = slidesinfo.map(
  (info) => `
    <div class="stack__slide-block w-100">
    <div class="stack__slide-images d-flex flex-column w-100 align-items-center">
        <img loading="lazy" data-src=${info._bigimg} src=${info._bigimg} alt="" class="stack__slide-image" />
        <div class="stack__sup-images d-flex w-100 justify-content-between align-items-center">
            <img loading="lazy" data-src=${info._smallimg1} src=${info._smallimg1} alt="" class="stack__sup-image" />
            <img loading="lazy" data-src=${info._smallimg2} src=${info._smallimg2} alt="" class="stack__sup-image" />
            <span class="stack__sup-more stack__sup-image d-flex align-items-center justify-content-center font-body1">
                ${info._num_more}
            </span>
        </div>
    </div>
    <div class="stack__slide-content w-100">
        <div class="stack__slide-info d-flex justify-content-between wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;">
            <p class="stack__slide-text font-body1">
                ${info._name}
            </p>
            <p class="stack__slide-text greu font-title">
                ${info._floor_state}
            </p>
        </div>
        <div class="stack__slide-autor d-flex w-100 justify-content-between align-items-center wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;">
            <span class="stack__autor-content font-title d-flex align-items-center">
                <div class="stack__autor-avatar-block">
                    <img loading="lazy" class='stack__autor-avatar' data-src=${info._autor_avatar} src=${info._autor_avatar} alt="" />
                </div>
                ${info._autor_name}
            </span>
            <p class="stack__autor-price font-title">
                ${info._price_eth} ETH
            </p>
        </div>
    </div>
    </div>
`
);
const StackSlide = () => {
  useEffect(() => {
    let slideBlocks = document.querySelector(".stack__slide-blocks");
    for (let i = 0; i < slideinfo.length; i++) {
      const element = slideinfo[i];
      slideBlocks.innerHTML += element;
    }
    stackPrevBtn = document.querySelector(".stack__prev-btn");
    stackNextBtn = document.querySelector(".stack__next-btn");
    stackSlider = document.querySelector(".stack__slide-blocks");
    stackBlock = document.querySelectorAll(".stack__slide-block");
    stackBlock[0].classList.add("active");
    let stackProgressbar = document.querySelector(".stack__progressbar span");
    stackProgressbar.style.width = stackSlider.clientWidth / 100 + "em";
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
        stackProgressbar.style.marginLeft =
          parseInt(stackProgressbar.style.marginLeft) +
          100 / (stackBlock.length - 1) -
          (parseInt(stackProgressbar.style.width) + 4) +
          "%";

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
        stackProgressbar.style.marginLeft =
          parseInt(stackProgressbar.style.marginLeft) -
          100 / (stackBlock.length - 1) +
          (parseInt(stackProgressbar.style.width) + 5) +
          "%";
        if (stackPrevBtn.classList.contains("deactive")) {
          stackPrevBtn.classList.remove("deactive");
        }
        if (stackActiveBlock.previousElementSibling !== null) {
          stackActiveBlock.previousElementSibling.classList.add("active");
          stackActiveBlock.classList.remove("active");
        }
      }
    });
  });
  return (
    <div className="stack__slide-blocks d-flex flex-nowrap w-100 overflow-hidden"></div>
  );
};

let stackPrevBtn, stackNextBtn, stackSlider, stackBlock, stackActiveBlock;

export default StackSlide;
