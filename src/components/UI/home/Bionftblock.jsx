import ImageNft1 from "../../../image/pages/home/bionft/bionft1.png";
import ImageNft2 from "../../../image/pages/home/bionft/bionft2.png";
import ImageNft3 from "../../../image/pages/home/bionft/bionft3.png";
import ImageNft4 from "../../../image/pages/home/bionft/bionft4.png";
import ImageNft5 from "../../../image/pages/home/bionft/bionft5.png";
import ImageNft6 from "../../../image/pages/home/bionft/bionft6.png";
import ImageNft7 from "../../../image/pages/home/bionft/bionft7.png";
import ImageNft8 from "../../../image/pages/home/bionft/bionft8.png";


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
let nftBlock = persons.map((person) => `
    <div class='hotnft__block d-flex flex-column '>
        <span class="hotnft__id font-caption">
            ${person.id}
        </span>
        <div class="hotnft__image-block">
            <img class="hotnft__image" src=${person.img} alt="" />
        </div>
        <h4 class="hotnft__name font-base">${person.name}</h4>
        <p class="hotnft__total font-caption m-auto">
            Total sale
            <span class="hotnft__total-num font-base" style="font-size: 14px !important;">${person.total} ETH</span>
        </p>
    </div>


`)

const BioNFTblock = () => {
    return (
        <div className='hotnft__blocks d-flex flex-wrap justify-content-center wrapper'></div>
    );
};

setTimeout(() => {
    let hotNFTblocks = document.querySelector('.hotnft__blocks')
    for (let i = 0; i < nftBlock.length; i++) {
        const element = nftBlock[i];
        hotNFTblocks.innerHTML += element
    }
}, 1000);
export default BioNFTblock