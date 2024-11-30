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
        <>
          {/* <Lodin /> */}
          <h1 className="flex items-center justify-start gap-2 my-8 text-2xl font-bold text-white">
            <i className="bi bi-stars"></i>
            <span>Artists</span>
          </h1>
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <div
                  role="status"
                  class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                >
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              );
            })}
          </div>
        </>
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
