import UniqueTag from "./UniqueTag"

const UniqueTags = ({ onFilter, displayTags }) => {

    const allTags = []

    const mergeTags = () => displayTags.map(({ tags }) => allTags.push(...tags))
    mergeTags()

    const filterTags = arr => arr.filter((item, index) => arr.indexOf(item) === index)
    const uniqueTags = filterTags(allTags)

    return (
        <>
            {uniqueTags.map((uniqueTag, index) => (
                <UniqueTag
                    key={index}
                    uniqueTag={uniqueTag}
                    onFilter={onFilter}
                />
            ))}
        </>
    )
}

export default UniqueTags


