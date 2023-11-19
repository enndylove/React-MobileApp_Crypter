import { lazy, useEffect } from 'react';
import { mainnet } from '@wagmi/core/chains'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'    
import { Imeta, Iwallet, Iether, Icoin, useApiArrow, Iplaceholder } from './ChooseImg'
const CookieDark = lazy(() => import('../../../main/CookieDark'));

let apiInfo = [
    {
        _name: 'MetaMask',
        _icon: `${Imeta}`,
        _api: 'MetaMask',
        _tag: 'Ethereum'
    },
        {
        _name: 'WalletConnect',
        _icon: `${Iwallet}`,
        _api: 'WalletConnect',
        _tag: 'Ethereum'
    },
    {
        _name: 'Coinbase Wallet',
        _icon: `${Icoin}`,
        _api: 'Coinbase Wallet',
        _tag: 'Ethereum'
    },
    {
        _name: 'MyEtherWallet',
        _icon: `${Iether}`,
        _api: 'MyEtherWallet',
        _tag: 'Ethereum'
    },
]
let blockapi = apiInfo.map((info) =>
    `
        <div class="choose__useapi d-flex justify-content-between align-items-center w-100" data-url="${info._api}" data-tag="${info._tag}">
            <div class="d-flex align-items-center">
                <img src=${info._icon} alt="" class="choose__useapi-img" />
                <h6 class="choose__useapi-name font-body2-bold color-white">
                    ${info._name}
                </h6>                        
            </div>
            <img class='choose__useapi-arrow' src=${useApiArrow} alt="" />
        </div>
    `
)
const Choose = () => {
    async function isAccount() {
        const account = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        if (account) {
            window.location = '/profile'
        }
    }
    useEffect(() => {
        setTimeout(() => {
            let el = document.querySelector('.choose__api')
            for (let i = 0; i < blockapi.length; i++) {
                el.innerHTML += blockapi[i]
            }
            let all = document.querySelectorAll('.choose__useapi')
            all.forEach(item => {
                item.addEventListener('click', () => {
                    let active = document.querySelector('.choose__useapi.active')
                    if (active) {
                        if (!item.classList.contains('active')) {
                            active.classList.remove('active');
                            item.classList.add('active')
                        }
                    } else {
                        item.classList.add('active')
                    }
                })
            })
            
            let tags = document.querySelectorAll('.choose__tag')
            tags.forEach(item => {
                item.addEventListener('click', () => {
                    // let useApi = document.querySelectorAll(`[data-tag="${item.textContent}"]`)
                    // let allApi = document.querySelectorAll(`[data-tag]`)
                    // if (useApi.length === 0) {
                    //     allApi.forEach(el => {
                    //         el.remove()
                    //     })
                    // } else {

                    // }
                    let active = document.querySelector('.choose__tag.active')
                    if (active) {
                        if (!item.classList.contains('active')) {
                            active.classList.remove('active');
                            item.classList.add('active')
                        }
                    } else {
                        item.classList.add('active')
                    }
                })
            })  
            
        }, 20)
    }, []);
    window.addEventListener('load', () => {
        isAccount()
    })
    // 1. Get projectId
    const projectId = 'b8656cc127e4828e503239d9737c6f86'
    const chains = [mainnet]
    const wagmiConfig = defaultWagmiConfig({
        chains,
        projectId,
        metadata: {
            name: 'Html Example',
            description: 'Html Example',
            url: 'https://web3modal.com',
            icons: ['https://avatars.githubusercontent.com/u/37784886']
        }
    })
    const modal = createWeb3Modal({ wagmiConfig, projectId, showQrModal: true, chains, themeVariables: {
        '--w3m-color-mix': '#010101',
        '--w3m-color-mix-strength': 0
    }
    })

    async function connectWallet() {
        // const account = await window.ethereum.request({
        //     method: 'eth_requestAccounts',
        // })
        // setWalletAddress(account[0])
        if (document.querySelector('.choose__useapi.active')) {
            modal.open();
        }
    }
    
    return (
        <section className="section choose default-padding"> 
            <h3 className="choose__title font-h3 color-white">
                Choose the wallet
            </h3>
            <div className="choose__tags d-flex align-items-center overflow-auto">
                <span className="choose__tag active">
                    Ethereum
                </span>
                <span className="choose__tag">
                    Flow
                </span>
                <span className="choose__tag">
                    Solana
                </span>
            </div>
            <div className="choose__api w-100">

            </div>
            <div className="choose__btn w-100 d-flex align-items-center justify-content-center" onClick={connectWallet}>
                <img className='choose__btn-icon' src={Iplaceholder} alt="" />
                <p className="choose__btn-font font-base color-white">
                    Scan to connect
                </p>
            </div>
            <CookieDark />
        </section>
    );
};


export default Choose