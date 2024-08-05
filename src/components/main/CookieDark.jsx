import "../../styles/DarkCookie.scss";

import { useEffect } from "react";

/**
 * Returns a React component that displays a cookie consent message.
 *
 * @param {string} name - The name of the cookie consent message.
 * @param {string} href - The URL of the cookie policy.
 * @param {string} link - The text of the link to the cookie policy.
 * @param {string} text - The text of the cookie consent message.
 * @param {function} clickFunc - The function to call when the "Accept" button is clicked.
 * @param {string} btn - The text of the "Accept" button.
 *
 * @example
 * const cookieConsent = CookieDarkMain("We use 🍪", "https://policies.google.com/technologies/cookies?hl=ru", "cookies", "for better experience", acceptCookie, "Accept");
 */
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

/**
 * Returns a React component that manages the cookie consent state.
 *
 * @example
 * const CookieDarkComponent = CookieDark();
 */
const CookieDark = () => {
  /**
   * Gets a cookie by name.
   *
   * @param {string} name - The name of the cookie.
   * @returns {string|null} The value of the cookie, or null if not found.
   *
   * @example
   * const cookieValue = getCookie("acceptCookies");
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
   * Sets a cookie with a given name, value, and expiration date.
   *
   * @param {string} name - The name of the cookie.
   * @param {string} value - The value of the cookie.
   * @param {number} daysToExpire - The number of days until the cookie expires.
   *
   * @example
   * setCookie("acceptCookies", "accept", 7);
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
   * Handles the "Accept" button click event.
   *
   * @param {Event} e - The click event.
   *
   * @example
   * const acceptCookie = (e) => {
   *   e.preventDefault();
   *   setCookie("acceptCookies", "accept", 7);
   *   const myCookieValue = getCookie("acceptCookies");
   *   console.log(myCookieValue);
   *   if (myCookieValue === "accept") {
   *     const cookieElement = document.querySelector(".cookie__dark");
   *     if (cookieElement) {
   *       cookieElement.remove();
   *     }
   *   }
   * };
   */
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

  useEffect(() => {
    if (getCookie("acceptCookies") === "accept") {
      document.querySelector(".cookie__dark").remove();
    }
  }, []);

  return (
      <>
        {CookieDarkMain("We use 🍪", "https://policies.google.com/technologies/cookies?hl=ru", "cookies", "for better experience", acceptCookie, "Accept")}
      </>
  );
};

export default CookieDark;