import Icons from './Icons/IconsPreloader';

/**
 * Preloader component that displays a loading animation.
 *
 * @returns {JSX.Element} The preloader component.
 *
 * @example
 * <Preloader />
 */
const Preloader = () => {
    return (
        <div className="preloader preloader-status active d-flex align-items-center justify-content-center flex-column w-100 h-100">
            <div className="preloader-img-wrapper preloader-status active">
                {Icons.IconLogo}
            </div>
        </div>
    );
};

export default Preloader;