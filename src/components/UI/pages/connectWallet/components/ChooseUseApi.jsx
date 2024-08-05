/**
 * Returns a JSX element representing a "Choose Use API" component.
 *
 * @param {string} name - The name of the API.
 * @param {string} tag - The tag associated with the API.
 * @param {string} icon - The URL of the icon for the API.
 * @param {JSX.Element} arrow - The arrow element to be displayed.
 *
 * @returns {JSX.Element} The "Choose Use API" component.
 *
 * @example
 * import ChooseUseApi from './ChooseUseApi';
 *
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <ChooseUseApi
 *         name="My API"
 *         tag="my-tag"
 *         icon="https://example.com/icon.png"
 *         arrow={<i className="fas fa-arrow-right" />}
 *       />
 *     </div>
 *   );
 * };
 */

const ChooseUseApi = (name, tag, icon, arrow) => {
    return (
        <div className="choose__useapi d-flex justify-content-between align-items-center w-100" data-url={name} data-tag={tag}>
            <div className="d-flex align-items-center">
                <img loading="lazy" data-src={icon} src={icon} alt="" className="choose__useapi-img" />
                <h6 className="choose__useapi-name font-body2-bold color-white">
                    {name}
                </h6>
            </div>
            <div className="choose__useapi-arrow">
                {arrow}
            </div>
        </div>
    )
}

export default ChooseUseApi;