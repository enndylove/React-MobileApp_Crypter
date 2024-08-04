const ChooseTagsBlock = (...name) => {
    const Tags = () => {
        name.forEach(tagName => {
            return (
                <span className="choose__tag">{tagName}</span>
            )
        })
    }
    return (
        <div className="choose__tags d-flex align-items-center overflow-auto">
            {Tags()}
        </div>
    )
}

export default ChooseTagsBlock;