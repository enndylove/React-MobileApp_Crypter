import "../../styles/DarkCookie.scss";

import { useEffect } from "react";


const CookieDarkMain = (name, href, link, text, clickFunc, btn) => {
  return (
    <div className="cookie__dark d-flex align-items-center m-auto justify-content-between flex-nowrap">
      <p className="cookie__dark-info font-caption">
        {name}
        <a className="color-white" href={href}>
          {link}
        </a>
        {text}
      </p>
      <p className="cookie__accept font-caption color-white pointer" onClick={clickFunc}>
        {btn}
      </p>
    </div>
  )
}

const CookieDark = () => {
  useEffect(() => {
    if (getCookie("acceptCookies") === "accept") {
      document.querySelector(".cookie__dark").remove();
    }
  }, []);
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  function setCookie(name, value, daysToExpire) {
    const expires = daysToExpire
      ? `expires=${new Date(
        Date.now() + daysToExpire * 86400000
      ).toUTCString()}`
      : "";
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; ${expires}; path=/`;
  }
  const acceptCookie = (e) => {
    e.preventDefault()
    // Set the "acceptCookies" cookie to "accept" with a duration of 7 days
    setCookie("acceptCookies", "accept", 7);

    // Get the value of the "acceptCookies" cookie
    const myCookieValue = getCookie("acceptCookies");
    console.log(myCookieValue);

    // Check if the "acceptCookies" cookie has the value "accept"
    if (myCookieValue === "accept") {
      // Remove the cookie consent element (assuming it has a class of "cookie__dark")
      const cookieElement = document.querySelector(".cookie__dark");
      if (cookieElement) {
        cookieElement.remove();
      }
    }
  };

  return (
    <>
      {CookieDarkMain("We use 🍪", "https://policies.google.com/technologies/cookies?hl=ru", "cookies", "for better experience", acceptCookie, "Accept")}
    </>
  );
};

export default CookieDark;
