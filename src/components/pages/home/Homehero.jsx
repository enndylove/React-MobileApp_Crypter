import { useEffect, useState } from 'react';
import { Animated } from "react-animated-css";

import ArrowImg from '../../../image/main/arrow.svg';
import PlaceholderImg from '../../../image/pages/home/homehero-placeholder.svg';
import HomeheroBank from '../../../image/pages/home/homehero.webp';

const HomeHero = () => {
  const [text, setText] = useState('');
  const title = 'Curated Artwork.';

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
    }, 200);

    return () => clearInterval(intervalId);
  }, []);
    
    return (
        <section className='section'>
            <section className='section default-padding wrapper'>
                <h1 className='homehero__title font-h2 position-relative'>
                    {text.split('').map((char, index) => (
                        <span key={index}>
                        {char}
                        {index === text.length - 1}
                        </span>
                    ))}
                </h1>
                <div className='homehero__arrow'>
                    <a className='homehero__arrow' href="#"><img className='homehero__arrow-img' data-src={ArrowImg} alt="" /></a>
                </div>
                <Animated  className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={3000}>
                    <p className='homehero__info font-body2'>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.</p>
                </Animated>
                <Animated  className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={3000}>
                    <div className='homehero__start'>
                        <a href='#' className='homehero__start font-button'>start your search<span><img className='placeholder-img' data-src={PlaceholderImg} alt="" /></span></a>
                    </div>                    
                </Animated>

            </section>
            <section className='section'>
                <Animated className='wow' animation='fadeIn' isVisible={true} animationInDuration={3000}>
                    <img className='homehero__bank-png' data-src={HomeheroBank} alt="" />
                </Animated>
                <div className="default-padding  homehero__content">
                    <div className="homehero__info-content d-flex align-items-center m-auto">
                        <div className="homehere__info-block">
                            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                                <h5 className="homehero__info-title font-base">
                                    Collection
                                </h5>
                                <p className="homehero__info-info font-base">
                                    <span style={{marginRight: 12}}><img className='placeholder-img' data-src={PlaceholderImg} alt="" /></span>
                                    Escape II
                                </p>
                            </Animated>
                        </div>                            


                        
                        <div className="homehere__info-block">
                            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                                <h5 className="homehero__info-title font-base">
                                    Buy now
                                </h5>
                                <p className="homehero__info-info font-base">
                                    <span style={{marginRight: 12}}><img className='placeholder-img' data-src={PlaceholderImg} alt="" /></span>
                                    10.00 ETH                            
                                </p>
                            </Animated>
                        </div>                            
                        

                    </div>
                    <div className="homehero__btt">
                        <Animated className='wow' animationIn="fadeInUp" animationInDuration={1000} isVisible={true}>
                            <h3 className="homehero__btt-title font-h3">
                                The creator network.
                            </h3>
                        </Animated>
                        <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                            <div className="homehero__btn-block d-flex align-items-center flex-column w-100">
                                <a href="#" className="w-100 homehero__btt-btn font-button">
                                    View NFT
                                </a>
                                <a href='#' className="w-100 homehero__btt-btn fill font-button">
                                    place a bid
                                </a>
                            </div>
                        </Animated>

                    </div>
                </div>
            </section>
        </section>
    );
};


export default HomeHero