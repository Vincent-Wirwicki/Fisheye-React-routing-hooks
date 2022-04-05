import { useParams } from "react-router-dom";
import { useState } from "react";

import Navigation from "../navigation/Navigation";
import ProfileInfo from "./ProfileInfo";
import ProfilePhotos from "./ProfilePhotos";

const Profile = ({ photographers, medias }) => {
  const { nameInUrl } = useParams();
  let allLikes = 0;
  const dataPhotos = medias;

  const photographer = photographers.find(({ name }) => name === nameInUrl);
  const matchMedias = medias.filter(
    ({ photographerId }) => photographerId === photographer.id
  );
  const [display, setDisplay] = useState(matchMedias);

  const calcLikes = () => matchMedias.map(({ likes }) => (allLikes += likes));
  calcLikes();

  const onFilter = e => {
    const tagValue = e.target.textContent.substring(1);
    const filterTags = dataPhotos.filter(({ tags }) => tags.includes(tagValue));
    filterTags.length && setDisplay(filterTags);
  };

  const onFilterRemove = () => setDisplay(matchMedias);

  return (
    <div className="min-w-screen min-h-screen h-fit p-5 flex flex-col items-center">
      <Navigation
        dataTags={matchMedias}
        onFilter={onFilter}
        onFilterRemove={onFilterRemove}
      />
      <section>
        <ProfileInfo photographer={photographer} likes={allLikes} />
      </section>
      <section className=" grid gap-5 justify-items-center items-center md:grid-cols-4 xs:grid-cols-1 md:w-[60rem] xs:w-96">
        {display.map((photo, index) => (
          <ProfilePhotos
            key={index}
            photo={photo}
            photographer={photographer}
          />
        ))}
      </section>
    </div>
  );
};

export default Profile;
