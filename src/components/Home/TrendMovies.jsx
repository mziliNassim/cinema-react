import React, { useEffect, useState } from "react";
import {
  movieUrlTrendsDay,
  movieUrlTrendsWeek,
  movieUrlGenre,
} from "../../data/movies";
import useFetchAxios from "../../hooks/useFetchAxios";
import { Link } from "react-router-dom";

const TrendMovies = ({ type }) => {
  const [filteredGenreNames, setFilteredGenreNames] = useState([]);
  const { data: genresMovies } = useFetchAxios(movieUrlGenre);
  const { data } = useFetchAxios(
    type == "week" ? movieUrlTrendsWeek : movieUrlTrendsDay
  );

  useEffect(() => {
    const genre_ids = data?.results[0].genre_ids;
    setFilteredGenreNames(
      genresMovies?.genres
        .filter((genre) => genre_ids.includes(genre.id))
        .map((genre) => genre.name)
    );
  }, [data, genresMovies]);

  return (
    <>
      <div className="">
        <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
          <i className="bi bi-stars"></i>
          <span>
            {type == "week" ? "Movies Of The Week" : "Movies Of The Day"}
          </span>
        </h1>
        <div className="relative w-full text-white border border-cyan-400 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.results[0].poster_path}`}
            alt=""
            className="w-full h-full opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 text-center text-white rounded-tl-full rounded-tr-full bg-cyan-800">
            <h2 className="my-5 text-4xl font-semibold">
              {data?.results[0].title}
            </h2>
            <div className="flex items-center justify-center w-full gap-2 my-5 text-xl font-semibold">
              {filteredGenreNames?.map((genre, i) => {
                // return (
                //   <span key={i} className="px-2 py-1 mx-1 rounded">
                //     {genre}
                //   </span>
                // );
              })}
            </div>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="/Watch"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2 justify-center">
                  <i className="bi bi-camera-reels"></i>
                  Watch
                </span>
              </Link>

              <Link
                to="/addToWatchList"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2 justify-center">
                  <i className="bi bi-patch-plus-fill"></i>
                  <span>Add To Watch List</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Rate */}
          <div className="absolute top-0 right-0 flex items-center gap-2 px-2 py-1">
            <i className="text-4xl text-yellow-400 bi bi-star-fill"></i>
            <div className="flex flex-col items-start">
              <span className="">
                <span
                  style={{ fontWeight: 600 }}
                  className="text-4xl font-semibold text-yellow-400"
                >
                  {data?.results[0].vote_average}
                </span>
                /10
              </span>
              <span className="">{data?.results[0].vote_count} Votes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendMovies;
