import React from "react";

import CarouselCard from "./CarouselCard";
import TrendMovies from "./TrendMovies.jsx";
import RecomendedMovies from "./RecomendedMovies.jsx";
import Peaples from "./Peaples.jsx";

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
              <TrendMovies type="day" />
              <TrendMovies type="week" />
            </div>

            {/* Recomended Movies */}
            <div className="col-span-2">
              <RecomendedMovies />
              <Peaples />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
