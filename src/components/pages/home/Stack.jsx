import { Animated } from 'react-animated-css';
import StackSlide from '../../UI/pages/home/Stackslide';

const Stack = () => {
    return (
        <section className="section stack default-padding">
            <Animated className='wow' animationIn="fadeIn" isVisible={true} animationInDuration={500}>
                <div className="stack__title-block">
                    <h3 className="stack__title font-h3">
                        Curated collections.
                    </h3>
                    <div className="stack__button-block d-flex">
                        <div className="stack__button stack__prev-btn deactive">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7071 17.7929C11.0976 18.1834 11.0976 18.8166 10.7071 19.2071C10.3166 19.5976 9.6834 19.5976 9.2929 19.2071L3.5 13.4142C2.719 12.6332 2.719 11.3668 3.5 10.5858L9.2929 4.79289C9.6834 4.40237 10.3166 4.40237 10.7071 4.79289C11.0976 5.18342 11.0976 5.81658 10.7071 6.20711L5.9142 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H5.9142L10.7071 17.7929Z"/>
                            </svg>
                        </div>
                        <div className="stack__button stack__next-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z"/>
                            </svg>
                        </div>
                    </div>
                </div>                
            </Animated>

            <StackSlide/>
            <div className="stack__progressbar"><span></span></div>
        </section>
    );
};



// stackSlider.scrollLeft = 100;




export default Stack