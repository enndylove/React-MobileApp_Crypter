/**
 * Renders a content menu item with a link and an arrow icon.
 *
 * @param {string} href - The URL of the link.
 * @param {string} name - The text to display for the link.
 * @returns {JSX.Element} A list item element with a link and an arrow icon.
 *
 * @example
 * <ContentMenu href="/about" name="About Us" />
 */
import Icons from "../Icons";

const ContentMenu = (href, name) => {
    return (
        <li className="content__menu-item w-100">
            <a href={href} className="content__menu-link font-body1 w-100 d-flex align-items-center justify-content-between">
                {name}
                {Icons.IconArrow}
            </a>
        </li>
    )
}
export default ContentMenu;