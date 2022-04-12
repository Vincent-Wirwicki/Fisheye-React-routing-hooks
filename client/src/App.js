import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProfilePhoto from "./components/profile/ProfilePhoto";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import useFetch from "./components/hooks/useFetch";

const App = () => {
  const [dataPhotographers, dataMedia, error, loading] = useFetch();

  return error ? (
    <div>Huston, we got an Error</div>
  ) : (
    <Router>
      <div className="min-w-screen min-h-screen h-fit p-5 flex flex-col items-center">
        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <div>App is loading</div>
              ) : (
                <Home photographers={dataPhotographers} medias={dataMedia} />
              )
            }
          />
          <Route
            path="/:nameInUrl"
            element={
              <Profile photographers={dataPhotographers} medias={dataMedia} />
            }
          />
          <Route
            path="/:nameInUrl/:photoTitle"
            element={
              <ProfilePhoto
                photographers={dataPhotographers}
                medias={dataMedia}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
