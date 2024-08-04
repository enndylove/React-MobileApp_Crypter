import {Animated} from "react-animated-css";


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

export default StackSlideBlock;