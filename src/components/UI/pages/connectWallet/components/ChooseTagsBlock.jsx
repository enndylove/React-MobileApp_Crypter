/**
 * ChooseTagsBlock component
 *
 * Renders a block of tags that can be chosen from.
 *
 * @param {...string} name - One or more tag names to be displayed
 * @returns {JSX.Element} A div element containing the tags
 *
 * Example:
 * ```javascript
 * import ChooseTagsBlock from './ChooseTagsBlock';
 *
 * const tags = ['Tag 1', 'Tag 2', 'Tag 3'];
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <ChooseTagsBlock {...tags} />
 *     </div>
 *   );
 * };
 * ```
 */
const ChooseTagsBlock = (...name) => {
    /**
     * Tags component
     *
     * Renders a single tag.
     *
     * @returns {JSX.Element} A span element representing the tag
     */
    const Tags = () => {
        return name.map((tagName, index) => (
            <span key={index} className="choose__tag">{tagName}</span>
        ));
    };

    return (
        <div className="choose__tags d-flex align-items-center overflow-auto">
            {Tags()}
        </div>
    );
};

export default ChooseTagsBlock;