/**
 * Import Icons component from IconsFooter module
 */
import Icons from './Icons/IconsFooter';

/**
 * Function to render a footer sub-component with an SVG icon and text
 *
 * @param {JSX.Element} svg - The SVG icon to render
 * @param {string} text - The text to render alongside the icon
 * @returns {JSX.Element} The footer sub-component
 *
 * Example:
 * FooterSub(Icons.IconLogo, "Empower your creativity")
 */
const FooterSub = (svg, text) => {
  return (
      <div className="footer__sub">
        <div className="footer__logo">
          {svg}
        </div>
        <p className="footer__info font-body2-bold">
          {text}
        </p>
      </div>
  )
}

/**
 * Function to render a footer item with a link and text
 *
 * @param {string} href - The link URL
 * @param {string} text - The text to render as the link
 * @returns {JSX.Element} The footer item
 *
 * Example:
 * FooterItem("#", "Explorer")
 */
const FooterItem = (href, text) => {
  return (
      <li className="footer__item">
        <a href={href} className="footer__link font-caption">
          {text}
        </a>
      </li>
  )
}

/**
 * Function to render a content title
 *
 * @param {string} title - The title to render
 * @returns {JSX.Element} The content title
 *
 * Example:
 * ContentTitle("CRYPTER.")
 */
const ContentTitle = (title) => {
  return (
      <h6 className="footer__content-title font-button color-darken">
        {title}
      </h6>
  )
}

/**
 * Function to get the icon component based on the type
 *
 * @param {string} typeIcon - The type of icon (e.g. "instagram", "twitter", etc.)
 * @returns {JSX.Element} The icon component
 *
 * Example:
 * getTypeIcon("instagram") // returns Icons.IconInstagram
 */
let getTypeIcon = (typeIcon) => {
  switch (typeIcon.toLowerCase()) {
    case "instagram":
      return Icons.IconInstagram;
    case "twitter":
      return Icons.IconTwitter;
    case "facebook":
      return Icons.IconFacebook;

    default:
      return Icons.IconEmpty
  }
}

/**
 * Function to render a footer icon
 *
 * @param {string} typeIcon - The type of icon (e.g. "instagram", "twitter", etc.)
 * @returns {JSX.Element} The footer icon
 *
 * Example:
 * FooterIcons("instagram")
 */
const FooterIcons = (typeIcon) => {
  let icon = getTypeIcon(typeIcon)
  return (
      <li className="footer__item">
        <a href="#" className="footer__link font-caption">
          {icon}
        </a>
      </li>
  )
}

/**
 * Function to render a license text
 *
 * @param {string} licence - The license text to render
 * @returns {JSX.Element} The license text
 *
 * Example:
 * Licence("Copyright 2022 UI8 LLC. All rights reserved")
 */
const Licence = (licence) => {
  return (
      <p className="footer__licence font-caption">
        {licence}
      </p>
  )
}

/**
 * The main Footer component
 *
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer__block">

          {FooterSub(Icons.IconLogo, "Empower your creativity")}

          <div className="footer__sup d-flex justify-content-between">

            <div className="footer__content">

              {ContentTitle("CRYPTER.")}

              <ul className="footer__ul">

                {FooterItem("#", "Explorer")}
                {FooterItem("#", "Connect wallet")}
                {FooterItem("#", "Upload")}
                {FooterItem("#", "How it work")}

              </ul>

            </div>

            <div className="footer__content">

              {ContentTitle("INFO")}

              <ul className="footer__ul">

                {FooterItem("#", "Download")}
                {FooterItem("#", "Help center")}
                {FooterItem("#", "Blog")}
                {FooterItem("#", "Jobs")}

              </ul>
            </div>
            <div className="footer__content" style={{ marginTop: `9%` }}>
              <ul className="footer__ul">

                {FooterIcons("instagram")}
                {FooterIcons("twitter")}
                {FooterIcons("facebook")}
                {FooterIcons("")}

              </ul>

            </div>

          </div>
        </div>

        {Licence("Copyright 2022 UI8 LLC. All rights reserved")}

      </footer>
  );
};

export default Footer;