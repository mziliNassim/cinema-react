import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useFetchAxios from "../../hooks/useFetchAxios.js";
import { movieUrlPopulaire } from "../../data/data.js";

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
  console.log("CarouselCard ~ error:", error);

  return (
    <>
      {loading ? (
        <Lodin />
      ) : (
        <>
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
                      className="mx-5 card"
                      to={`/movies/movie?id=${card.id}`}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                        alt={card.original_title}
                        className="card__image"
                      />
                      <div className="card__overlay">
                        <div className="p-2 text-center overlay__text w-100">
                          <p>{card.original_title}</p>
                          <p>{card.release_date}</p>
                          <p>{card.vote_average}</p>
                          <p>Vote Count : {card.vote_count}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Carousel>
        </>
      )}
    </>
  );
};

export default CarouselCard;
