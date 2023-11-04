import ImageFeaturedTagname from '../../../image/pages/home/bionft/bionft1.png';

const TagAutor = () => {
    return (
        <div className="featured__tagname-block d-flex align-items-center">
            <div className="featured__tagname-img-block">
                <img src={ImageFeaturedTagname} alt="" className="featured__tagname-img" />
            </div>
            <h5 className="featured__tagname-name font-title">
                @randomdash
            </h5>
        </div>
    );
};


export default TagAutor