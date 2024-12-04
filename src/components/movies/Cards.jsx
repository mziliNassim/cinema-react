import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { moviesUrl } from "../../data/movies";
import { tvUrl } from "../../data/tvShows";
import { options } from "../../data/data";
import Card from "./Card";

const Cards = ({ type }) => {
  // Routing
  let location = useLocation();
  // let { page } = useParams();
  // let navigate = useNavigate();

  // Stats
  const [cards, setCards] = useState([]);
  const [loding, setLoding] = useState(true);
  const [url, setUrl] = useState("");
  // const [pageCount, setPageCount] = useState(500);

  const fetchUrl = (url) => {
    setCards([]);
    axios
      .get(url, options.movies)
      .then((res) => {
        // setPageCount(res.data.total_pages);
        setCards(res.data.results);
      })
      .catch((err) => {
        console.error("err : ", err.message);
        setCards([]);
      })
      .finally(() => setLoding(false));
  };

  // Fetch data when the URL changes
  useEffect(() => {
    // Fetching Data
    setLoding(true);
    setCards([]);
    // setUrl(type === "movie" ? moviesUrl : tvUrl);
    if (type === "movie") fetchUrl(moviesUrl);
    else fetchUrl(tvUrl);

    // Scrool to top logic
    window.scrollTo(0, 0);
  }, [url, location]);

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-2 gap-1 items-center justify-between max-w-screen-xl p-4 m-0 mx-auto ">
        {loding ? (
          [1, 2, 3, 4].map((i) => {
            return (
              <div
                key={i}
                role="status"
                className="flex items-center justify-center h-64 max-w-sm w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })
        ) : cards.length > 0 ? (
          <>
            {cards.map((card, i) => (
              <Card key={card.id} card={card} type={type} />
            ))}
            {/* <PaginationBar pageCount={pageCount} /> */}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cards;
