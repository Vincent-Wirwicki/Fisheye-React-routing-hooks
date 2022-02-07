import { Link } from "react-router-dom"

const PhotographerCard = ({ photographer, mediaLikes }) => {

    let allLikes = 0

    const { id, country, name, city, tagline, price, tags, portrait } = photographer;

    const tagPhotographer = tags.map((tag, index) => <p className="mr-3" key={index}>#{tag}</p>)

    const matchId = mediaLikes.filter(({ photographerId }) => photographerId === id)

    const calcLikes = () => matchId.map(({ likes }) => allLikes += likes)

    calcLikes();

    return (

        <article className="flex flex-col items-center justify-center mt-5 h-70 w-70"> 
            <div className="rounded-full border-2 overflow-hidden h-36 w-36 my-5 flex justify-center items-center "> 
                <img src={portrait} alt={portrait } className="scale-150"/>
            </div>
            <div className="mt-2 flex flex-col justify-center items-center">
            <Link to={`/${name}`} >
                <h3 className="font-bold text-2xl mb-2">{name}</h3>
            </Link>
            <p className="text-sm">{city} - {country}</p>
            <h4 className="font-bold text-base mt-3">{tagline}</h4>
            <div className="flex my-3 text-sm">
                <p className="mr-5">{allLikes} likes</p>
                <p >{price} €/jour</p>
            </div>
            <div className="flex flex-wrap">
                {tagPhotographer}
            </div>
            </div>
        </article>

    )
}

export default PhotographerCard

