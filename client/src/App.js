import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ListPhotographers from "./components/ListPhotographers";
import PhotographersData from "./components/PhotographersData";
import ProfileDisplayPhoto from "./components/ProfileDisplayPhoto";
import ProfilePhotographer from "./components/ProfilePhotographer";

const App = () => {
  const [photographers, setPhotographers] = useState([]);
  const [photographersDisplay, setPhotographersDisplay] = useState([]);
  const [medias, setMedias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const fetchPhotographers = async () => {
    const res = await fetch("/photographers");
    const data = await res.json();
    console.log(data, "fetch photo");
    return data;
  };

  const fetchMedia = async () => {
    const res = await fetch("/media");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    setIsLoading(true);

    const getPhotographer = async () => {
      const photographersFromServer = await fetchPhotographers();
      setPhotographers(photographersFromServer);
      setPhotographersDisplay(photographersFromServer);
    };

    const getMedia = async () => {
      const mediaFromServer = await fetchMedia();
      setMedias(mediaFromServer);
    };

    try {
      getMedia();
      getPhotographer();
      setIsLoading(false);
    } catch (err) {
      setIsErr(true);
    }
  }, []);

  const onFilter = e => {
    const tagValue = e.target.textContent.substring(1);
    const filterTags = photographers.filter(({ tags }) =>
      tags.includes(tagValue)
    );
    filterTags.length && setPhotographersDisplay(filterTags);
  };

  const onFilterRemove = () => setPhotographersDisplay(photographers);

  return isErr ? (
    <div>Huston, we got an Error</div>
  ) : (
    <Router>
      <div
        className="app min-w-full min-h-full h-fit p-5
          flex flex-col items-center "
      >
        <Header
          photographers={photographers}
          onFilter={onFilter}
          onFilterRemove={onFilterRemove}
        />
        <Routes>
          <Route
            path="/"
            element={
              <section className="grid min-w-screen mt-10 justify-items-center md:grid-cols-3  md:gap-10 xs:gap-5 xs:grid-cols-1">
                {!isLoading && (
                  <PhotographersData
                    display={photographersDisplay}
                    mediaLikes={medias}
                  />
                )}
              </section>
            }
          />
          <Route
            path="/:nameInUrl"
            element={
              <ProfilePhotographer
                photographers={photographers}
                medias={medias}
              />
            }
          />
          <Route
            path="/:nameInUrl/:photoTitle"
            element={
              <ProfileDisplayPhoto
                photographers={photographers}
                medias={medias}
              />
            }
          />
          <Route
            path="/ListPhotographers"
            element={
              <ListPhotographers
                photographers={photographers}
                medias={medias}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
