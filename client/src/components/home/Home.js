import Navigation from "../navigation/Navigation";
import PhotographerCard from "./PhotographerCard";
import { useState } from "react";

const Home = ({ photographers, medias }) => {
  const dataUsers = photographers;
  const [display, setDisplay] = useState(photographers);

  const onFilter = e => {
    const tagValue = e.target.textContent.substring(1);
    const filterTags = dataUsers.filter(({ tags }) => tags.includes(tagValue));
    filterTags.length && setDisplay(filterTags);
  };

  const onFilterRemove = () => setDisplay(photographers);

  return (
    <div>
      <Navigation
        dataTags={photographers}
        onFilter={onFilter}
        onFilterRemove={onFilterRemove}
      />
      <section className="grid min-w-screen md:grid-cols-3 xs:grid-cols-1 md:gap-10 xs:gap-5 mt-10 justify-items-center">
        {display.map(photographer => (
          <PhotographerCard
            key={photographer.id}
            photographer={photographer}
            mediaLikes={medias}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
