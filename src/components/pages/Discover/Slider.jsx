import BigImg from '../../../image/pages/home/stack/slide/block3/big-image.webp'
import BigImg2 from '../../../image/pages/home/stack/slide/block2/big-image.webp'

import Icons from './Icons/IconsSlider'

const SliderButton = (btnFunc, className, icon) => {
  return (
    <div onClick={btnFunc} className={`pointer discover__slider-btn ${className} d-flex align-items-center justify-content-center`}>
      {icon}
    </div>
  )
}
const SliderBlock = (backgrondImage, title, tagImage, tagName, hrefFirstBtn, hrefSecondBtn) => {
  return (
    <div className="discover__slider-block active d-flex flex-column h-100 position-relative">
      <img className='discover__slider-block-image w-100 h-100' src={backgrondImage} alt="" />
      <div className="discover__slider-content position-absolute w-100">
        <div className="discover__slider-content-block">
          <h3 className="font-h3 color-white">
            {title}
          </h3>
          <div className="discover__slider-content-autor d-flex align-items-center">
            <img src={tagImage} alt="" />
            <span className="font-title color-white">
              {tagName}
            </span>
          </div>
        </div>
        <div className="discover__slider-content-block buttons d-flex justify-content-between">
          <a href={hrefFirstBtn} className="discover__slider-content-btn font-button d-flex align-items-center justify-content-center">
            View NFT
            {Icons.buttonArrow}
          </a>
          <a href={hrefSecondBtn} className="discover__slider-content-btn fill font-button d-flex align-items-center justify-content-center">
            place a bid
          </a>
        </div>
      </div>
    </div>
  )
}

const Slider = () => {

  function prevFunc() {
    let prevBtn = document.querySelector('.discover__slider-btn-prev'),
      nextBtn = document.querySelector('.discover__slider-btn-next')

    let activeblock = document.querySelector('.discover__slider-block.active'),
      blockLength = document.querySelector('.discover__slider-block').clientWidth,
      allBlocks = document.querySelector('.discover__slider-slider'),
      prevBlock = activeblock.previousElementSibling

    if (!prevBlock) {
      prevBtn.classList.add('disabled')
    } else if (prevBlock && prevBtn.classList.contains('disabled')) {
      prevBtn.classList.remove('disabled')
    }

    if (prevBlock !== null) {
      if (nextBtn.classList.contains('disabled')) {
        nextBtn.classList.remove('disabled');
      }
      activeblock.classList.remove('active')
      prevBlock.classList.add('active')
      allBlocks.style.right = parseInt(allBlocks.style.right) - blockLength + 'px'
    } else if (prevBlock === null && !prevBtn.classList.contains('disabled')) {
      prevBtn.classList.add('disabled')
    }
  }
  function nextFunc() {
    let prevBtn = document.querySelector('.discover__slider-btn-prev'),
      nextBtn = document.querySelector('.discover__slider-btn-next')

    let activeblock = document.querySelector('.discover__slider-block.active'),
      blockLength = document.querySelector('.discover__slider-block').clientWidth,
      allBlocks = document.querySelector('.discover__slider-slider'),
      nextBlock = activeblock.nextElementSibling

    if (!nextBlock) {
      nextBtn.classList.add('disabled')
    } else if (nextBlock && nextBtn.classList.contains('disabled')) {
      nextBtn.classList.remove('disabled')
    }

    if (nextBlock !== null) {
      if (prevBtn.classList.contains('disabled')) {
        prevBtn.classList.remove('disabled');
      }
      activeblock.classList.remove('active')
      nextBlock.classList.add('active')
      allBlocks.style.right = parseInt(allBlocks.style.right) + blockLength + 'px'
    } else if (nextBlock === null && !nextBtn.classList.contains('disabled')) {
      nextBtn.classList.add('disabled')
    }
  }
  // {
  //   data.map((item) => (
  //     <li key={item.id}>{item.name}</li>
  //   ))
  // }
  return (
    <section className="section discover__slider w-100 position-relative overflow-hidden">

      <div className="discover__slider-btns position-absolute d-flex align-items-center">

        {SliderButton(prevFunc, "discover__slider-btn-prev disabled", Icons.prevArrow)}
        {SliderButton(nextFunc, "discover__slider-btn-next", Icons.nextArrow)}

      </div>

      <div className="discover__slider-slider h-100 position-relative d-flex flex-nowrap" style={{ right: 0 }}>

        {SliderBlock(BigImg, "D-0-G", BigImg, "@ravaravatar", "#", "#")}
        {SliderBlock(BigImg2, "D-0-G 2", BigImg2, "@ravaravatar", "#", "#")}

      </div>

    </section>
  );
};


export default Slider
