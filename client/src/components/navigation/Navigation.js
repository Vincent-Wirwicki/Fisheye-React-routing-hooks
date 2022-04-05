import UniqueTag from "./UniqueTag";
import { useState } from "react";

import { Link } from "react-router-dom";

const Navigation = ({ onFilter, onFilterRemove, dataTags }) => {
  const allTags = [];
  const [isActive, setIsActive] = useState();
  const [isFilter, setIsFilter] = useState(false);

  const mergeTags = () => dataTags.map(({ tags }) => allTags.push(...tags));
  const filterUniqueTags = arr =>
    arr.filter((item, index) => arr.indexOf(item) === index);

  mergeTags();
  const uniqueTags = filterUniqueTags(allTags);

  const resetFilter = () => {
    setIsFilter(false);
    setIsActive();
    onFilterRemove();
  };

  return (
    <nav className="flex md:flex-row md:h-24 md:justify-start md:items-start xs:flex-col xs:items-start   ">
      <div className="flex md:flex-col md:items-center xs:flex-row xs:justify-between xs:items-baseline">
        <Link to="/">
          <h1
            onClick={resetFilter}
            className="text-3xl font-bold md:px-5 xs:px-0 cursor-pointer"
          >
            FishEye
          </h1>
        </Link>
        <button
          onClick={resetFilter}
          className={
            isFilter
              ? "md:text-sm xs:text-xs text-center h-10 w-32 font-semibold underline"
              : "md:text-sm xs:text-xs text-center h-10 w-32 font-semibold underline opacity-0"
          }
        >
          Remove Filter
        </button>
      </div>

      <div
        className="flex justify-evenly overflow-auto min-w-[40rem]
                  md:p-0 md:min-w-[50rem]  
                  xs:w-44 xs:p-2 xs:flex-nowrap xs:min-w-[20rem] "
      >
        {uniqueTags.map((uniqueTag, i) => (
          <UniqueTag
            uniqueTag={uniqueTag}
            key={i}
            current={isActive === uniqueTag}
            onClick={e => {
              setIsActive(uniqueTag);
              setIsFilter(true);
              onFilter(e);
            }}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
