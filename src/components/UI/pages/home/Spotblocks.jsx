import React, { useEffect } from "react";
import ImgPost1 from "../../../../image/pages/home/spotlight/post/post1.webp";
import ImgPost2 from "../../../../image/pages/home/spotlight/post/post2.webp";
import ImgPost3 from "../../../../image/pages/home/spotlight/post/post3.webp";
import ImgPost4 from "../../../../image/pages/home/spotlight/post/post4.webp";
import ImgPost5 from "../../../../image/pages/home/spotlight/post/post5.webp";
import ImgPost6 from "../../../../image/pages/home/spotlight/post/post6.webp";
import ImgPost7 from "../../../../image/pages/home/spotlight/post/post7.webp";
import ImgPost8 from "../../../../image/pages/home/spotlight/post/post8.webp";
import ImgPost9 from "../../../../image/pages/home/spotlight/post/post9.webp";
import ImgPost10 from "../../../../image/pages/home/spotlight/post/post10.webp";
import ImgPost11 from "../../../../image/pages/home/spotlight/post/post11.webp";
import ImgPost12 from "../../../../image/pages/home/spotlight/post/post12.webp";

import ImgAvatar1 from "../../../../image/pages/home/spotlight/avatars/avatar1.webp";
import ImgAvatar2 from "../../../../image/pages/home/spotlight/avatars/avatar2.webp";
import ImgAvatar3 from "../../../../image/pages/home/spotlight/avatars/avatar3.webp";

const postInfo = [
  {
    IMAGE: `${ImgPost1}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost2}`,
    TITLE: "CutePlanet ®",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost3}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost4}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost5}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost6}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost7}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost8}`,
    TITLE: "Robot: One",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost9}`,
    TITLE: "Mars",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost10}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost11}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
  {
    IMAGE: `${ImgPost12}`,
    TITLE: "The Currency",
    PRICE: "12.29",
    AVATARS: {
      _avatar1: `${ImgAvatar1}`,
      _avatar2: `${ImgAvatar2}`,
      _avatar3: `${ImgAvatar3}`,
    },
  },
];
let posts = postInfo.map(
  (post) => `
    <div class="spotlight__content w-100">
        <img loading="lazy" data-src=${post.IMAGE} src=${post.IMAGE} alt="" class="spotlight__img w-100 wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;" />
        <div class="spotlight__content-block d-flex align-items-center justify-content-between">
            <div class="spotlight__block">
                <h5 class="spotlight__content-title color-white font-body1 wow" style="animation-delay: 0ms; animation-duration: 1200ms; pointer-events: all; animation-name: fadeIn;">
                    ${post.TITLE}
                </h5>
                <p class="spotlight__content-price font-base wow" style="animation-delay: 0ms; animation-duration: 1400ms; pointer-events: all; animation-name: fadeIn;">
                    Buy now
                    <span class="color-white font-base spotlight__price-eth">
                        ${post.PRICE} ETH
                    </span>
                </p>
            </div>
            <div class="spotlight__avatars d-flex flex-nowrap wow" style="animation-delay: 0ms; animation-duration: 1400ms; pointer-events: all; animation-name: fadeIn;">
                <div class="spotlight__avatar-block">
                    <img loading="lazy" data-src=${post.AVATARS._avatar1} src=${post.AVATARS._avatar1} alt="" class="spotlight__avatar" />
                </div>
                <div class="spotlight__avatar-block">
                    <img loading="lazy" data-src=${post.AVATARS._avatar2} src=${post.AVATARS._avatar2} alt="" class="spotlight__avatar" />
                </div>
                <div class="spotlight__avatar-block">
                    <img loading="lazy" data-src=${post.AVATARS._avatar3} src=${post.AVATARS._avatar3} alt="" class="spotlight__avatar" />
                </div>
            </div>
        </div>
    </div>
`
);

const SpotBlocks = () => {
  useEffect(() => {
    let spotBlocks = document.querySelector(".spotlight__blocks");
    for (let i = 0; i < posts.length; i++) {
      const element = posts[i];
      spotBlocks.innerHTML += element;
    }
  }, []);
  return <div className="spotlight__blocks w-100"></div>;
};

export default SpotBlocks;
