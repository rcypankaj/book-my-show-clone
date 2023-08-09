import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

// Components
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard";
import PosterSlider from "../components/Poster/PosterSlider";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      try {
        const getPopularMovies = await axios.get("/movie/popular");
        setRecommendedMovies(getPopularMovies.data.results);
      } catch (err) {
        console.log(`Data not found 😔😔 ${err.message}`);
      }
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      try {
        const getTopRatedMovies = await axios.get("/movie/top_rated");
        setPremierMovies(getTopRatedMovies.data.results);
      } catch (err) {
        console.log(`Data not found 😔😔 ${err.message}`);
      }
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      try {
        const getUpcomingMovies = await axios.get("/movie/upcoming");
        setOnlineStreamEvents(getUpcomingMovies.data.results);
      } catch (err) {
        console.log(`Data not found 😔😔 ${err.message}`);
      }
    };

    requestUpcomingMovies();
  }, []);
  return (
    <Fragment>
      {/* <HeroCarousel /> */}
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      {/*
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every week"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Stream Event"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div> */}
    </Fragment>
  );
};

export default HomePage;
