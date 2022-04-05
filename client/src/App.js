import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilePhoto from "./components/profile/ProfilePhoto";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";

const App = () => {
  const [photographers, setPhotographers] = useState();
  const [medias, setMedias] = useState();
  const [isErr, setIsErr] = useState(false);
  const [isPhotographer, setIsPhotographer] = useState(false);
  const [isMedia, setIsMedia] = useState(false);

  const fetchPhotographers = async () => {
    const res = await fetch("/photographers");
    const data = await res.json();
    return data;
  };

  const fetchMedia = async () => {
    const res = await fetch("/media");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    setIsMedia(false);
    setIsPhotographer(false);

    const getPhotographer = async () => {
      const photographersFromServer = await fetchPhotographers();
      setPhotographers(photographersFromServer);
      setIsPhotographer(true);
    };

    const getMedia = async () => {
      const mediaFromServer = await fetchMedia();
      setMedias(mediaFromServer);
      setIsMedia(true);
    };

    try {
      getMedia();
      getPhotographer();
    } catch (err) {
      setIsErr(true);
    }
  }, []);

  return isErr ? (
    <div>Huston, we got an Error</div>
  ) : (
    <Router>
      <div className="min-w-screen min-h-screen h-fit p-5 flex flex-col items-center">
        <Routes>
          <Route
            path="/"
            element={
              isPhotographer && isMedia ? (
                <Home photographers={photographers} medias={medias} />
              ) : (
                <div>App is loading</div>
              )
            }
          />
          <Route
            path="/:nameInUrl"
            element={<Profile photographers={photographers} medias={medias} />}
          />
          <Route
            path="/:nameInUrl/:photoTitle"
            element={
              <ProfilePhoto photographers={photographers} medias={medias} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
