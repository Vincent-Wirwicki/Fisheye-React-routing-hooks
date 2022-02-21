import UniqueTags from "./UniqueTags"
import { Link } from "react-router-dom"

const Header = ({ onFilter, onFilterRemove, photographers }) => {
    const style = "";
    return (
      <header className="flex flex-wrap justify-evenly md:items-baseline md:flex-row xs:flex-col xs:items-center">
        <Link to="/">
          <h1
            onClick={onFilterRemove}
            className="text-3xl font-bold p-5 cursor-pointer"
          >
            FishEye
          </h1>
        </Link>
        <div
          className="flex justify-evenly overflow-auto w-44
                    md:p-0 md:min-w-fit md:max-w-fit 
                    xs:w-44 xs:p-2 xs:flex-nowrap"
        >
          {<UniqueTags displayTags={photographers} onFilter={onFilter} />}
        </div>
        <Link to="/ListPhotographers">
          <h3 className="text-base font-bold p-5"> Nos Photographes </h3>
        </Link>
      </header>
    );
}

export default Header
