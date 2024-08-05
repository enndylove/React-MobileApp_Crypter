/**
 * Adds an event listener to elements with the specified class name, allowing only one element to be active at a time.
 *
 * @param {string} querty - The class name of the elements to target.
 *
 * @example
 * ChooseTags('my-tag');
 * // This will add an event listener to all elements with the class 'my-tag'.
 * // When an element is clicked, it will become the active element and any previously active element will be deactivated.
 */
export default function ChooseTags(querty) {
    let elements = document.querySelectorAll(`.${querty}`);
    elements.forEach((item) => {
        item.addEventListener("click", () => {
            let active = document.querySelector(`.${querty}.active`);
            if (active) {
                if (!item?.classList.contains("active")) {
                    active?.classList.remove("active");
                    item?.classList.add("active");
                }
            } else {
                item?.classList.add("active");
            }
        });
    });
}