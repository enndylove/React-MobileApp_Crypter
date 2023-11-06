import React, { useEffect, useRef } from 'react';
import ImageNft1 from "../../../image/pages/home/bionft/bionft1.webp";
import ImageNft2 from "../../../image/pages/home/bionft/bionft2.webp";
import ImageNft3 from "../../../image/pages/home/bionft/bionft3.webp";
import ImageNft4 from "../../../image/pages/home/bionft/bionft4.webp";
import ImageNft5 from "../../../image/pages/home/bionft/bionft5.webp";
import ImageNft6 from "../../../image/pages/home/bionft/bionft6.webp";
import ImageNft7 from "../../../image/pages/home/bionft/bionft7.webp";
import ImageNft8 from "../../../image/pages/home/bionft/bionft8.webp";


let persons = [
    {
        
        name: "@randomdash",
        total: '12.29',
        id: 1,
        img: `${ImageNft1}`,
    },
    {
        name: "@randomdash",
        total: '12.29',
        id: 2,
        img: `${ImageNft2}`,
    },
    {
        name: "@gelo",
        total: '12.29',
        id: 3,
        img: `${ImageNft3}`,
    },
    {
        name: "@elnafrederick",
        total: '12.29',
        id: 4,
        img: `${ImageNft4}`,
    },
    {
        name: "@_kolahon",
        total: '12.29',
        id: 5,
        img: `${ImageNft5}`,
    },
    {
        name: "@mcbess",
        total: '12.29',
        id: 6,
        img: `${ImageNft6}`,
    },
    {
        name: "@aaronpenne",
        total: '12.29',
        id: 7,
        img: `${ImageNft7}`,
    },
    {
        name: "@nocellcoverage",
        total: '12.29',
        id: 8,
        img: `${ImageNft8}`,
    },
]

const BioNFTblock = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          observer.current.unobserve(lazyImage);
        }
      });
    })
  );

  useEffect(() => {
    let hotNFTblocks = document.querySelector('.hotnft__blocks');
    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];
      const block = document.createElement('div');
      block.className = 'hotnft__block d-flex flex-column';

      const id = document.createElement('span');
      id.className = 'hotnft__id font-caption';
      id.textContent = person.id;
      block.appendChild(id);

      const imageBlock = document.createElement('div');
      imageBlock.className = 'hotnft__image-block';
      const image = document.createElement('img');
      image.className = 'hotnft__image';
      image.dataset.src = person.img;
      image.alt = '';
      imageBlock.appendChild(image);
      block.appendChild(imageBlock);

      const name = document.createElement('h4');
      name.className = 'hotnft__name font-base';
      name.textContent = person.name;
      block.appendChild(name);

      const total = document.createElement('p');
      total.className = 'hotnft__total font-caption m-auto';
      total.innerHTML = `
        Total sale
        <span class="hotnft__total-num font-base" style="font-size: 14px !important;">${person.total} ETH</span>
      `;
      block.appendChild(total);

      hotNFTblocks.appendChild(block);
      observer.current.observe(image);
    }
  }, []);

  return <div className='hotnft__blocks d-flex flex-wrap justify-content-center wrapper'></div>;
};

export default BioNFTblock;

