import { Animated } from "react-animated-css";
import BlogBlock from "../../UI/pages/home/Blogblock";

/**
 * Blog text information
 * @type {string}
 */
const BlogTextInfo =
    "Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.";

/**
 * Returns a blog text content component with animated title and text
 * @param {string} title - The title of the blog
 * @param {string} info - The text information of the blog
 * @returns {JSX.Element} - The blog text content component
 * @example
 * <BlogTextContent title="Own your creativity." info={BlogTextInfo} />
 */
const BlogTextContent = (title, info) => {
    return (
        <div className="blog__text-content">
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1000}>
                <h3 className="blog__title font-h3">{title}</h3>
            </Animated>
            <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={1400}>
                <p className="blog__text-info font-body1">{info}</p>
            </Animated>
        </div>
    );
};

/**
 * Returns the Blog component with animated text content and a BlogBlock component
 * @returns {JSX.Element} - The Blog component
 * @example
 * <Blog />
 */
const Blog = () => {
    return (
        <section className="section blog">
            {BlogTextContent('Own your creativity.', BlogTextInfo)}
            <BlogBlock />
        </section>
    );
};

export default Blog;