// HOC
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PosterSlider from "../components/Poster/PosterSlider";
import axios from "axios";

const FilterPage = () => {
  const [filterMovies, setFilterMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  let data = location.state;

  useEffect(() => {
    const fetchedMovie = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/search/movie?query=${data}`);
        setFilterMovies(response.data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchedMovie();
  }, [data, setFilterMovies]);

  return (
    <>
      {isLoading ? (
        <h1 className="text-center">Loading....</h1>
      ) : filterMovies.length !== 0 ? (
        <PosterSlider
          title={`Seatch result of ${data}`}
          subtitle=""
          posters={filterMovies}
          isDark={false}
        />
      ) : (
        <h1 className="text-center">No result found😔😔😔</h1>
      )}
    </>
  );
};

export default FilterPage;
