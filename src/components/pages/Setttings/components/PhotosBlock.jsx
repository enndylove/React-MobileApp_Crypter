import Icons from "../Icons";


class ImageFactory {
    static defaultImage = "https://i.ibb.co/PWhrW7k/Frame-1361.jpg"
    static loadImage(url) {
        return url ? URL.createObjectURL(url) : this.defaultImage
    }
}

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