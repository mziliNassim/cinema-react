import React from "react";
import { Link } from "react-router-dom";

import { moviesUrl } from "../../data/movies";
import useFetchAxios from "../../hooks/useFetchAxios";

import PaginationBar from "../PaginationBar.jsx";
import Lodin from "../Loding.jsx";

const RecomendedMovies = () => {
  const { data, loading } = useFetchAxios(`${moviesUrl}&page=3S`);

  return (
    <>
      {loading ? (
        <Lodin />
      ) : (
        <div className="">
          {data !== null && data !== undefined && (
            <>
              <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
                <i className="bi bi-stars"></i>
                <span>Recomended Movies</span>
              </h1>

              <div className="grid w-full grid-cols-1 gap-1 text-white border border-cyan-400 md:grid-cols-5">
                <>
                  {data?.results.map((card, i) => {
                    return (
                      <Link
                        key={card.id}
                        className="relative card"
                        to={`/movies/movies?id=${card.id}`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                          alt={card.original_title}
                          className="card__image"
                        />
                        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all delay-100 bg-gray-600 opacity-0 card__overlay hover:opacity-80">
                          <div className="p-2 text-center overlay__text w-100">
                            <p>{card.original_title}</p>
                            <p>{card.release_date}</p>
                            <p>{card.vote_average}</p>
                            <p>Vote Count : {card.vote_count}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <PaginationBar pageCount="10" />
                </>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RecomendedMovies;
