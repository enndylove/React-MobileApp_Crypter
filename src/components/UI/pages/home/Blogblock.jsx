import { Animated } from "react-animated-css";

import Picture from './Picture/PictureBlog'

/**
 * BlogPost component
 *
 * Renders a single blog post with image, title, info, and optional dot info.
 *
 * @param {string} srcPicture - The source URL of the blog post image.
 * @param {string} title - The title of the blog post.
 * @param {string} info - The info text of the blog post.
 * @param {JSX.Element} dotIcon - The icon to display next to the dot info.
 * @param {string[]} dotInfo - An array of dot info strings.
 * @param {string} hrefBtn - The URL to link to from the "Learn more" button.
 * @param {string} textBtn - The text to display on the "Learn more" button.
 *
 * @returns {JSX.Element} The rendered blog post component.
 *
 * @example
 * <BlogPost
 *   srcPicture={Picture.IPost1}
 *   title="Your Collection, your way."
 *   info="In web3, artists are taking back ownership and control over their creativity..."
 *   dotIcon={<Picture.IDot />}
 *   dotInfo={["Earn a 10% royalty for all secondary market", "Creativity is valuable on Crypter"]}
 *   hrefBtn="#"
 *   textBtn="learn more"
 * />
 */
const BlogPost = (srcPicture, title, info, dotIcon, dotInfo, hrefBtn, textBtn) => {
    /**
     * IDotInfo component
     *
     * Renders the dot info section of the blog post.
     *
     * @returns {JSX.Element} The rendered dot info section.
     */
    const IDotInfo = () => {
        if (dotInfo && dotInfo.length > 0) {
            return dotInfo.map((infoItem, index) => (
                <div key={index} className="blog__post-idot d-flex align-items-center">
                    <Animated className="blog__idot wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
                        {dotIcon}
                    </Animated>
                    <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
                        <p className="blog__idot-info font-body2">
                            {infoItem}
                        </p>
                    </Animated>
                </div>
            ));
        } else {
            return ""
        }
    };

    return (
        <div className="blog__post">
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <img loading="lazy" data-src={srcPicture} src={srcPicture} alt="" className="blog__post-img" />
            </Animated>

            <div className="blog__post-content">
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <h3 className="blog__post-title font-h3">{title}</h3>
                </Animated>
                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1200}>
                    <p className="blog__post-info font-body2">{info}</p>
                </Animated>

                {IDotInfo()}

                <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                    <div className="blog__btn-wrapp">
                        <a href={hrefBtn} className="blog__btn font-button">
                            {textBtn}
                        </a>
                    </div>
                </Animated>
            </div>
        </div>
    );
};

/**
 * BlogBlock component
 *
 * Renders a block of blog posts.
 *
 * @returns {JSX.Element} The rendered blog block component.
 */
const BlogBlock = () => {
    return (
        <div className="blog__content">
            {BlogPost(
                Picture.IPost1,
                "Your Collection, your way.",
                "In web3, artists are taking back ownership and control over their creativity...",
                Picture.IDot,
                [
                    "Earn a 10% royalty for all secondary market",
                    "Creativity is valuable on Crypter"
                ],
                "#",
                "learn more"
            )}

            {BlogPost(
                Picture.IPost2,
                "Lowest mint fees.",
                `Minting an NFT is like adding your signature to a painting...`,
                Picture.IDot,
                [],
                "#",
                "learn more"
            )}

            {BlogPost(
                Picture.IPost3,
                "Create together, earn together.",
                `Add a Split to your NFT to seamlessly pay creative collaborators...`,
                Picture.IDot,
                [],
                "#",
                "learn more"
            )}
        </div>
    )
};

export default BlogBlock;