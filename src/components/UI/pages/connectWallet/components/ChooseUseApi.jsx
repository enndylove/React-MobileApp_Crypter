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