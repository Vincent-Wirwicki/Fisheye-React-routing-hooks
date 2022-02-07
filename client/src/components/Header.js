import UniqueTags from "./UniqueTags"
import { Link } from "react-router-dom"

const Header = ({ onFilter, onFilterRemove, photographers }) => {
 
    return (
        <header className="flex justify-between items-baseline" >
            <Link to='/'> 
                <h1 onClick={onFilterRemove} className="text-3xl font-bold p-5 cursor-pointer">FishEye</h1>
            </Link>
            <div className="flex flex-wrap justify-evenly">
                {<UniqueTags
                    displayTags={photographers}
                    onFilter={onFilter}
                />}
            </div>
            <Link to='/ListPhotographers'>
                <h3 className="text-base font-bold p-5"> Nos Photographes </h3>
            </Link>
        </header>
    )
}

export default Header
