import { useEffect, useState } from "react";

const useFetch = () => {
  const [dataPhotographers, setDataPhotographers] = useState(null);
  const [dataMedia, setDataMedia] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    setLoading(true);
    const getPhotographers = async () => {
      const res = await fetchData("/photographers");
      setDataPhotographers(res);
    };
    const getMedia = async () => {
      const res = await fetchData("/media");
      setDataMedia(res);
    };
    try {
      getPhotographers();
      getMedia();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(dataMedia, dataPhotographers);
  return [dataPhotographers, dataMedia, error, loading];
};

export default useFetch;
