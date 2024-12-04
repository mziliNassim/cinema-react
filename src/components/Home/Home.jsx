import React from "react";

import CarouselCard from "./CarouselCard";
import Trend from "./Trend.jsx";
import RecomendedMovies from "./RecomendedMovies.jsx";
import Peaples from "./Peaples.jsx";

import { movieUrlTrendsDay, movieUrlTrendsWeek } from "../../data/movies.js";
import { tvShowUrlTrendsDay, tvShowUrlTrendsWeek } from "../../data/tvShows.js";

const Home = () => {
  return (
    <>
      <div className="p-0 m-0">
        <div className="max-w-screen-xl p-4 m-0 mx-auto ">
          {/* Popular Movies */}
          <CarouselCard />

          <div className="grid grid-cols-1 gap-4 my-0 md:grid-cols-3">
            {/* Trend Movie */}
            <div className="col-span-1">
              <Trend type="movie" url={movieUrlTrendsWeek} />
              <Trend type="tv show" url={tvShowUrlTrendsWeek} />
            </div>

            {/* Recomended Movies */}
            <div className="col-span-2">
              <RecomendedMovies />
              {/* <Peaples /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
