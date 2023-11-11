import { useEffect } from 'react';

import IPost1 from '../../../../image/pages/home/blog/1.webp'
import IPost2 from '../../../../image/pages/home/blog/2.webp'
import IPost3 from '../../../../image/pages/home/blog/3.webp'
import IDot from '../../../../image/pages/home/homehero-placeholder.svg'

let postsInfo = [
    {
        _image: `${IPost1}`,
        title: 'Your Collection, your way.',
        info: `In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time.`,
        ets: [
            'Earn a 10% royalty for all secondary market',
            'Creativity is valuable on Crypter'
        ],
    },
    {
        _image: `${IPost2}`,
        title: 'Lowest mint fees.',
        info: `Minting an NFT is like adding your signature to a painting. Make your mark in web3 with works that are emblematic of your creative practice.
        Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.`,
        ets: [],
    },
    {
        _image: `${IPost3}`,
        title: 'Create together, earn together.',
        info: `Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on.
        You can also use Splits to donate directly to the causes you care about most....`,
        ets: [],
    },
]

function etsTxt(element) {
    let ets = element.ets
    if(ets.length >= 0) {
        let etsS = ets.map((etsT) => `
        <div class="blog__post-idot d-flex align-items-center">
            <img loading="lazy" data-src=${IDot} src=${IDot} alt="" class="blog__idot wow" style="animation-delay: 0ms; animation-duration: 1200ms; pointer-events: all; animation-name: fadeIn;" />
            <p class="blog__idot-info font-body2 wow" style="animation-delay: 0ms; animation-duration: 1400ms; pointer-events: all; animation-name: fadeIn;">
                ${etsT}
            </p>
        </div>
        `)
        var etsFull = '' 
        for (let i = 0; i < etsS.length; i++) {
            const item = etsS[i];
            etsFull += item
        }
        return etsFull
        
    } else {
        return ''        
    }

}

let posts = postsInfo.map((post) => `
    <div class="blog__post">
    <img loading="lazy" data-src=${post._image} src=${post._image} alt="" class="blog__post-img wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;" />
    <div class="blog__post-content">
        <h3 class="blog__post-title font-h3 wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;">
            ${post.title}
        </h3>
        <p class="blog__post-info font-body2 wow" style="animation-delay: 0ms; animation-duration: 1200ms; pointer-events: all; animation-name: fadeIn;">
            ${post.info}
        </p>
        ${etsTxt(post)}
        <div class="blog__btn-wrapp wow" style="animation-delay: 0ms; animation-duration: 1000ms; pointer-events: all; animation-name: fadeIn;">
            <a href="#" class="blog__btn font-button">
                learn more
            </a>
        </div>
    </div>
    </div>
`)

const BlogBlock = () => {
    useEffect(() => {
        let blogContent = document.querySelector('.blog__content')
        for (let i = 0; i < posts.length; i++) {
            const element = posts[i];
            blogContent.innerHTML += element
        }
    })

    return (
        <div className='blog__content'>

        </div>
    );
};


export default BlogBlock