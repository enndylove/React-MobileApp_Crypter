import { lazy } from "react";
import '../../../styles/connectWallet.scss'


const WalletContent = lazy(() => import('../../pages/connectWallet/WalletContent'));
const Choose = lazy(() => import('../../UI/pages/connectWallet/Choose'));

const Connectwallet = () => {
    return (
        <>
            <WalletContent /> 
            <Choose />
        </>
    );
};


export default Connectwallet