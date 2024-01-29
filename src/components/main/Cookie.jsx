import { useEffect } from "react";

const CookieMain = (title, clickFunc, text) => {
  return (
    <div className="cookie d-flex w-100 align-items-center justify-content-between">
      <p className="cookie__text font-caption">
        {title}
      </p>
      <span className="cookie__btn color-darken font-button pointer" onClick={clickFunc}>
        {text}
      </span>
    </div>
  )
}

const Cookie = () => {
  useEffect(() => {
    if (getCookie("acceptCookies") === "accept") {
      document.querySelector(".cookie").remove();
    }
  });

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
    e.preventDefault();
    setCookie("acceptCookies", "accept", 7);
    const myCookieValue = getCookie("acceptCookies");
    console.log(myCookieValue);
    if (myCookieValue === "accept") {
      document.querySelector(".cookie").remove();
    }
  };

  return (
    <>
      {CookieMain("We use cookies for better service.", acceptCookie, "ACCEPT")}
    </>
  );
};

export default Cookie;
