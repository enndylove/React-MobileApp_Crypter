import Icons from './Icons/IconsPreloader';

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
