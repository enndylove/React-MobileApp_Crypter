import { useEffect } from "react";

/**
 * CookieMain component
 *
 * Renders a cookie banner with a title, accept button, and text.
 *
 * @param {string} title - The title of the cookie banner
 * @param {function} clickFunc - The function to call when the accept button is clicked
 * @param {string} text - The text to display on the accept button
 * @returns {JSX.Element} The cookie banner component
 */
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

/**
 * Cookie component
 *
 * Handles the display and acceptance of cookies.
 *
 * @returns {JSX.Element} The cookie component
 */
const Cookie = () => {
  /**
   * useEffect hook
   *
   * Checks if the user has already accepted cookies, and if so, removes the cookie banner.
   */
  useEffect(() => {
    if (getCookie("acceptCookies") === "accept") {
      document.querySelector(".cookie").remove();
    }
  });

  /**
   * getCookie function
   *
   * Retrieves the value of a cookie by name.
   *
   * @param {string} name - The name of the cookie to retrieve
   * @returns {string|null} The value of the cookie, or null if not found
   */
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

  /**
   * setCookie function
   *
   * Sets a cookie with a given name, value, and expiration time.
   *
   * @param {string} name - The name of the cookie to set
   * @param {string} value - The value of the cookie to set
   * @param {number} daysToExpire - The number of days until the cookie expires
   */
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

  /**
   * acceptCookie function
   *
   * Handles the acceptance of cookies.
   *
   * @param {Event} e - The event object
   */
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