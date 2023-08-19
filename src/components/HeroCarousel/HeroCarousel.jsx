import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "react-slick";
import { PrevArrow, NextArrow } from "./Arrows";

const imgDefaultPath = "https://image.tmdb.org/t/p/original";

const HeroCarousel = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const requestTrendingMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer d9955ee33dc8a6490180fa1af1acec39",
        },
      };
      try {
        const getTrendingMovies = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        );
        setTrendingMovies(getTrendingMovies.data.results);
      } catch (err) {
        console.log(`Data not found 😔😔 ${err.message}`);
      }
    };

    requestTrendingMovies();
  }, []);

  const settingsLg = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Fragment>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {trendingMovies.map((image) => (
            <Link to={`/movie/${image.id}`}>
              <div className="w-full h-56 md:h-80 py-3" key={image.id}>
                <img
                  src={imgDefaultPath + image.backdrop_path}
                  alt="Banner"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
            </Link>
          ))}
        </HeroSlider>
      </div>

      {/* for large screen */}
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {trendingMovies.map((image) => (
            <Link to={`/movie/${image.id}`}>
              <div className="w-full h-96 px-2 py-3" key={image.id}>
                <img
                  src={imgDefaultPath + image.backdrop_path}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </Link>
          ))}
        </HeroSlider>
      </div>
    </Fragment>
  );
};

export default HeroCarousel;
