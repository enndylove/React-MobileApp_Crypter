import BlogBlock from '../../UI/pages/home/Blogblock';

const BlogTextInfo = 'Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.'

const Blog = () => {
    return (
        <section className='section blog'>
            <div className="blog__text-content">
                <h3 className="blog__title font-h3">
                    Own your creativity.
                </h3>
                <p className="blog__text-info font-body1">
                    {BlogTextInfo}
                </p>
            </div>
            <BlogBlock />
        </section>
    );
};


export default Blog