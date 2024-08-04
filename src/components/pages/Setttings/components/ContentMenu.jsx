import Icons from "../Icons";

const ContentMenu = (href, name) => {
    return (
        <li className="content__menu-item w-100">
            <a href={href} className="content__menu-link font-body1 w-100 d-flex align-items-center justify-content-between">
                {name}
                {Icons.IconArrow}
            </a>
        </li>
    )
}
export default ContentMenu;