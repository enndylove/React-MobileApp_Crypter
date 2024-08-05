/**
 * Image imports for blog posts
 *
 * This module exports image imports for blog posts and a placeholder icon.
 *
 * @example
 * import { IPost1, IPost2, IPost3, IDot } from './images';
 *
 * const BlogPost = () => {
 *   return (
 *     <div>
 *       <img src={IPost1} alt="Blog Post 1" />
 *       <img src={IPost2} alt="Blog Post 2" />
 *       <img src={IPost3} alt="Blog Post 3" />
 *       <div>{IDot}</div>
 *     </div>
 *   );
 * };
 */

import IPost1 from "../../../../../image/pages/home/blog/1.webp";
import IPost2 from "../../../../../image/pages/home/blog/2.webp";
import IPost3 from "../../../../../image/pages/home/blog/3.webp";

/**
 * Placeholder icon
 *
 * A placeholder icon represented as an SVG element.
 *
 * @type {JSX.Element}
 */
const IDot =
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon/placeholder">
            <circle id="Ellipse 2" cx="12" cy="12" r="11" stroke="#A6AEAD" strokeWidth="2" />
            <circle id="Ellipse 3" cx="12" cy="12" r="1" stroke="#A6AEAD" strokeWidth="2" />
        </g>
    </svg>

export default {
    /**
     * Image import for blog post 1
     *
     * @type {string}
     */
    IPost1,
    /**
     * Image import for blog post 2
     *
     * @type {string}
     */
    IPost2,
    /**
     * Image import for blog post 3
     *
     * @type {string}
     */
    IPost3,
    /**
     * Placeholder icon
     *
     * @type {JSX.Element}
     */
    IDot
}