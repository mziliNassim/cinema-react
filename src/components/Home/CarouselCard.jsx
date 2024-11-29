import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useFetchAxios from "../../hooks/useFetchAxios.js";
import { movieUrlPopulaire } from "../../data/movies.js";

import Lodin from "../Loding.jsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const CarouselCard = () => {
  const { data, loading, error } = useFetchAxios(movieUrlPopulaire);

  return (
    <>
      {loading ? (
        <Lodin />
      ) : (
        <>
          <div className="my-5">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              transitionDuration={10}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {data !== null &&
                data.results.map((card, index) => {
                  return (
                    <div className="p-0 mx-1 slider" key={index}>
                      <Link
                        className="relative card"
                        to={`/movies/movie?id=${card.id}`}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                          alt={card.original_title}
                          className="card__image"
                        />
                        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all delay-100 bg-gray-600 opacity-0 card__overlay hover:opacity-80">
                          <div className="flex flex-col gap-3 p-2 text-2xl font-semibold text-center text-white overlay__text w-100">
                            <p>{card.original_title}</p>
                            <p>{card.release_date}</p>
                            <p>{card.vote_average}</p>
                            <p>{card.vote_count} Vote</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
};

export default CarouselCard;
