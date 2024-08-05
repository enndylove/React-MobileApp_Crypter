import { Animated } from "react-animated-css";
import StackSlide from "../../UI/pages/home/Stackslide";
import Icons from "./Icons/IconsStack";

/**
 * Renders a stack title block with a title, left and right arrow icons.
 *
 * @param {string} title - The title to display.
 * @param {JSX.Element} iconLeftArrow - The left arrow icon.
 * @param {JSX.Element} iconRigthArrow - The right arrow icon.
 * @returns {JSX.Element} The stack title block.
 *
 * Example:
 * ```javascript
 * StackTitleBlock("Curated collections.", Icons.IconLeftArrow, Icons.IconRigthArrow)
 * ```
 */
const StackTitleBlock = (title, iconLeftArrow, iconRigthArrow) => {
    return (
        <Animated className="wow" animationIn="fadeIn" isVisible={true} animationInDuration={500}>
            <div className="stack__title-block">
                <h3 className="stack__title font-h3">
                    {title}
                </h3>
                <div className="stack__button-block d-flex">
                    <div className="stack__button stack__prev-btn deactive">
                        {iconLeftArrow}
                    </div>
                    <div className="stack__button stack__next-btn">
                        {iconRigthArrow}
                    </div>
                </div>
            </div>
        </Animated>
    )
}

/**
 * Renders the Stack component, which includes a title block, a stack slide, and a progress bar.
 *
 * @returns {JSX.Element} The Stack component.
 *
 * Example:
 * ```javascript
 * <Stack />
 * ```
 */
const Stack = () => {
    return (
        <section className="section stack default-padding">

            {StackTitleBlock("Curated collections.", Icons.IconLeftArrow, Icons.IconRigthArrow)}

            <StackSlide />

            <div className="stack__progressbar"><span></span></div>

        </section>
    );
};

// stackSlider.scrollLeft = 100;

export default Stack;