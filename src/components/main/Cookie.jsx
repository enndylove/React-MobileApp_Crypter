import { useEffect } from 'react';
const Cookie = () => {
    useEffect(() => {
        if (document.cookie === 'acceptCoocies=accept') { 
            document.querySelector('.cookie').remove()
        }
    })

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }

    function setCookie(name, value, daysToExpire) {
        const expires = daysToExpire ? `expires=${new Date(Date.now() + daysToExpire * 86400000).toUTCString()}` : '';
        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
    }


    const acceptCookie = (e) => {
        setCookie('acceptCookies', 'accept', 7);
        const myCookieValue = getCookie('acceptCoocies');
        console.log(myCookieValue);
        if (document.cookie === 'acceptCoocies=accept') { 
            document.querySelector('.cookie').remove()
        }
    }
    

    return (
        <div className='cookie d-flex w-100 align-items-center justify-content-between'>
            <p className="cookie__text font-caption">
                We use cookies for better service.
            </p>
            <span
                className="cookie__btn color-darken font-button"
                onClick={acceptCookie}
            >
                ACCEPT
            </span>
        </div>
    );
};


export default Cookie