import { Animated } from "react-animated-css";
import BlogBlock from "../../UI/pages/home/Blogblock";

const BlogTextInfo =
  "Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.";

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
  )
}

const Blog = () => {
  return (
    <section className="section blog">
      {BlogTextContent('Own your creativity.', BlogTextInfo)}
      <BlogBlock />
    </section>
  );
};

export default Blog;
