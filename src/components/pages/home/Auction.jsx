import PostBgImage from '../../../image/pages/home/auction/bg-img-post.png'
import TagAutor from '../../UI/home/TagAutor';

let auctionPriceUsdt, auctionPrice
auctionPrice = 8.00
auctionPriceUsdt = auctionPrice * 3079.35
const Auction = () => {
    return (
        <section className="section auction">
            <div className="auction__text-content default-padding">

                <h3 className="auction__text-title font-h3">
                    Auctions ending soon
                </h3>

                <div className="auction__btn-wrapper">

                    <a href="#" className="auction__text-btn font-button">
                        explorer more
                        <span className="auction__btn-list font-button">
                            109
                        </span>
                    </a> 

                </div>
            </div>

            <div className="auction__post position-relative">

                <img src={PostBgImage} alt="" className="auction__post-img position-absolute" />

                <div className="auction__post-content w-100 position-absolute d-flex flex-column justify-content-between">
                    <TagAutor/>
                    <div className="auction__post-info d-flex justify-content-between w-100">

                        <div className="auction__info-block">

                            <p className="auction__price-sub font-base color-white">
                                Current bid
                            </p>
                            <h5 className="auction__price font-h4 color-white">
                                {auctionPrice.toFixed(2)} ETH
                            </h5>
                            <p className="auction__price-usdt font-base color-white">
                                ${auctionPriceUsdt.toFixed(2)}
                            </p>

                        </div>

                        <div className="auction__info-block auction__time-content w-100">

                            <p className="auction__price-sub font-base color-white">
                                Auction ends in
                            </p>
                            <div className="auction__time-block d-flex align-items-center justify-content-between w-100">
                                <div className="auction__time-hrs auction__time">
                                    <h5 className="auction__price font-h4 color-white auction__hrs">
                                        24
                                    </h5>
                                    <p className="auction__price-usdt font-base color-white">
                                        hrs
                                    </p>
                                </div>
                                <div className="auction__time-min auction__time">
                                    <h5 className="auction__price font-h4 color-white auction__min">
                                        59
                                    </h5>
                                    <p className="auction__price-usdt font-base color-white">
                                        min
                                    </p>
                                </div>
                                <div className="auction__time-sec auction__time">
                                    <h5 className="auction__price font-h4 color-white auction__sec">
                                        59
                                    </h5>
                                    <p className="auction__price-usdt font-base color-white">
                                        sec
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
setTimeout(() => {
    let auctionPost = document.querySelector('.auction__post')
    auctionPost.style.height = auctionPost.clientWidth + 'px';

    
    setInterval(() => {    
        let auctionHrs, auctionMin, auctionSec
        auctionHrs = document.querySelector('.auction__hrs')
        auctionMin = document.querySelector('.auction__min')
        auctionSec = document.querySelector('.auction__sec')
        if(parseInt(auctionHrs.textContent) !== 0 || parseInt(auctionMin.textContent) !== 0 || parseInt(auctionSec.textContent) !== 0) {
            if(parseInt(auctionSec.textContent) === 0) {
                if(parseInt(auctionMin.textContent) === 0 && parseInt(auctionHrs.textContent) !== 0) {
                    parseInt(auctionHrs.textContent--)
                } else {
                    parseInt(auctionMin.textContent--)
                }
            } else {
                parseInt(auctionSec.textContent--)
            }            
        }

    },  1000);


}, 1000);

export default Auction