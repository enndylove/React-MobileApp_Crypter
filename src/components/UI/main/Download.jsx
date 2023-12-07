import { Animated } from "react-animated-css";
import FormNLetter from "./FormNLetter";

const downloadInfo =
  "In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time. ";
const newsletterInfo = "Get the latest Crypter updates";

const Download = () => {
  return (
    <section className="section download-newsletter">
      <div className="download default-padding">
        <Animated
          className="wow"
          animationIn="fadeInUp"
          isVisible={true}
          animationInDuration={1000}
        >
          <h3 className="download__title download-newsletter__title font-h3 color-darken">
            Download
          </h3>
        </Animated>
        <div className="download__content download-newsletter__content w-100">
          <Animated
            className="wow"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1200}
          >
            <p className="download__info font-body2 color-darken">
              {downloadInfo}
            </p>
          </Animated>
          <Animated
            className="wow w-100 download__button-wrapper"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1300}
          >
            <div className="w-100">
              <a href="#" className="download__button w-100 font-button">
                apple store
                <svg
                  className="dowload__button-icon"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8438 9.89209C17.7188 8.37067 16.125 8.19167 15.5625 8.19167C14.1563 8.01268 12.8438 8.99713 12.0938 8.99713C11.3438 8.99713 10.3125 8.19167 9.09375 8.28117C6.9375 8.28117 4.5 9.98158 4.5 13.3824C4.5 17.0517 7.5 21.258 9.375 21.1685C10.5937 21.1685 10.875 20.4526 12.2813 20.4526C13.6875 20.4526 13.9688 21.1685 15.2812 21.1685C17.0625 21.1685 18.8438 18.3047 19.5 16.6937C16.5 15.1723 16.125 11.5925 18.8438 9.89209Z"
                    stroke="#F7FBFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9767 2.16992C13.3252 2.25482 11.2419 4.3774 11.526 6.16036C13.8934 6.33017 16.2608 4.20759 15.9767 2.16992Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Animated>
          <Animated
            className="wow w-100 download__button-wrapper"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1400}
          >
            <div className="w-100">
              <a href="#" className="download__button w-100 font-button white">
                google play
                <svg
                  className="dowload__button-icon white"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.3262H18.9693C18.6357 16.8715 15.6288 19.6699 12 19.6699C8.15 19.6699 5 16.5199 5 12.6699C5 8.81992 8.15 5.66992 12 5.66992C14.275 5.66992 16.375 6.80742 17.6875 8.55742"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Animated>
        </div>
      </div>
      <div className="newsletter default-padding">
        <Animated
          className="wow"
          animationIn="fadeInUp"
          isVisible={true}
          animationInDuration={1000}
        >
          <h3 className="download__title download-newsletter__title font-h3 color-white">
            Newsletter
          </h3>
        </Animated>
        <div className="download__content download-newsletter__content w-100">
          <Animated
            className="wow"
            animationIn="fadeIn"
            isVisible={true}
            animationInDuration={1200}
          >
            <p className="download__info font-body2">{newsletterInfo}</p>
          </Animated>
          <FormNLetter />
        </div>
      </div>
    </section>
  );
};

export default Download;
