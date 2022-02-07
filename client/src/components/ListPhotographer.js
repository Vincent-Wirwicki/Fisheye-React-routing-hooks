const ListPhotographer = ({photographer, medias}) => {
    
    const style = "mt-5 border-b-2 py-1 pl-2"
    const { country, name, city, price, tags } = photographer;
    const spanTags = tags.map((tag, index )=> <span className="mr-2" key={index}> #{tag} </span>)

    return (
        <>
            <p className={`${style}`}>{name}</p>
            <p className={`${style}`}>{city}</p>
            <p className={`${style}`}>{country}</p>
            <p className={`${style}`}>{price} €/j</p>
            <p className={`${style}`}>{spanTags}</p>   
        </>
    )
}

export default ListPhotographer
