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