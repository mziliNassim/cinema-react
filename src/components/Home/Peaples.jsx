import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { peopleUrlPopulair } from "../../data/data";
import useFetchAxios from "../../hooks/useFetchAxios";
import Lodin from "../Loding";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
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

const RecomendedMovies = () => {
  const { data, loading } = useFetchAxios(peopleUrlPopulair);

  return (
    <>
      {loading ? (
        <Lodin />
      ) : (
        <div className="">
          {data !== null && (
            <>
              <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
                <i className="bi bi-stars"></i>
                <span>Artists</span>
              </h1>

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
                {data?.results.map((card, index) => {
                  return (
                    <div
                      className="p-0 mx-1 text-white slider rounded-2xl"
                      key={index}
                    >
                      <div className="text-center bg-transparent border backdrop:blur-xl rounded-2xl border-cyan-400">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${card.profile_path}`}
                          alt={card.original_title}
                          className="w-full h-24 rounded-2xl"
                        />
                        <div className="font-semibold ">
                          <p className="text-sm text-wrap">{card.name}</p>
                          <p className="text-sm text-wrap">
                            {card.known_for_department}
                          </p>
                        </div>
                        {/* <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all delay-100 bg-gray-600 opacity-0 card__overlay hover:opacity-80">
                      <div className="flex flex-col gap-3 p-2 text-2xl font-semibold text-center text-white overlay__text w-100"></div>
                    </div> */}
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RecomendedMovies;
