import { Animated } from "react-animated-css";
import BlogBlock from "../../UI/pages/home/Blogblock";

const BlogTextInfo =
  "Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.";

const Blog = () => {
  return (
    <section className="section blog">
      <div className="blog__text-content">
        <Animated
          className="wow"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1000}
        >
          <h3 className="blog__title font-h3">Own your creativity.</h3>
        </Animated>
        <Animated
          className="wow"
          animationIn="fadeIn"
          isVisible={true}
          animationInDuration={1400}
        >
          <p className="blog__text-info font-body1">{BlogTextInfo}</p>
        </Animated>
      </div>
      <BlogBlock />
    </section>
  );
};

export default Blog;
