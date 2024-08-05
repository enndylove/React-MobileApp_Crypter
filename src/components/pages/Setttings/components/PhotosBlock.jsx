import Icons from "../Icons";

/**
 * A class that provides utility functions for loading images
 */
class ImageFactory {
    /**
     * The default image URL to use when no URL is provided
     * @type {string}
     */
    static defaultImage = "https://i.ibb.co/PWhrW7k/Frame-1361.jpg";

    /**
     * Loads an image from a URL
     * @param {string|null} url - The URL of the image to load
     * @returns {string} The URL of the loaded image
     */
    static loadImage(url) {
        return url ? URL.createObjectURL(url) : this.defaultImage;
    }
}


/**
 * A functional component that renders a block of photos
 * @param {string} classImages - The CSS class to apply to the photos block
 * @param {string} htmlFor - The id of the associated label element
 * @param {string} image - The URL of the image to display
 * @param {function} setImages - A callback function to set the new image when a file is selected
 * @param {string} title - The title of the photo
 * @param {string} info - Additional information about the photo
 * @returns {JSX.Element} A JSX element representing the photo block
 */
const PhotosBLock = (classImages, htmlFor, image, setImages, title, info) => {
    return (
        <div className="content__photos-block">

            <div className={classImages}>
                <img className="content__photos-image w-100 h-100" alt="image not faund" src={ImageFactory.loadImage(image)} />
                {image !== null ? (
                    <button className="content__photos-button" onClick={() => setImages(null)}>
                        {Icons.IconClose}
                    </button>
                ) : (<></>)}

            </div>
            <div className="content__photos-text">
                <p className="font-body2-bold color-darken">
                    {title}
                </p>
                <span className="content__photos-image-size font-base">
          {info}
        </span>
            </div>

            <label htmlFor={htmlFor} className="content__photos-upload pointer font-button color-darken">
                upload
            </label>
            <input
                type="file"
                id={htmlFor}
                name="image_target"
                className="d-none"
                onChange={(event) => {
                    console.log(event.target?.files[0]);
                    setImages(event.target?.files[0]);
                }}
            />
        </div>
    )
}

export default PhotosBLock;