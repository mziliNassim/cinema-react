import React, { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../img/logo.ico";

const Navigation = () => {
  const [isToggeled, setIsToggeled] = useState(false);
  // const [type, setType] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    let serchTerm = e.target.value;
    if (serchTerm === "") navigate(location.pathname);
    else {
      if (location.pathname.startsWith("/movies"))
        navigate(`/movies?search=${serchTerm}`);
      else navigate(`/tvshows?search=${serchTerm}`);
    }
  };

  //   useEffect(() => {
  //     if (location.pathname.startsWith("/movies")) setType("movies");
  //     else if (location.pathname.startsWith("/tvshows")) setType("TV Shows");
  //     else setType(null);
  //   }, [location]);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          {/* Logo && home nav link */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold text-white sofadi-one-regular whitespace-nowrap">
              CinemA
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex-col hidden p-4 mt-4 font-medium border border-gray-100 rounded-lg md:flex md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block px-3 py-2 text-white rounded active:text-blue-700 md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className="block px-3 py-2 text-white rounded active:text-blue-700 md:bg-transparent md:p-0 "
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshows"
                className="block px-3 py-2 text-white rounded active:text-blue-700 active:underline md:bg-transparent md:p-0 "
              >
                TV Shows
              </NavLink>
            </li>
          </ul>

          {/* Nav links && Search Input */}
          <div className="flex md:order-2">
            {/* Search Icon */}
            <button
              onClick={() => setIsToggeled(!isToggeled)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                onChange={handleChange}
              />
            </div>

            {/* Toggle Btn */}
            <button
              onClick={() => setIsToggeled(!isToggeled)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive */}
        <div
          className={`${isToggeled ? "hidden" : "block"} md:hidden mx-auto p-4`}
        >
          <div className="relative w-full">
            {/* search icon */}
            <div className="absolute flex items-center pointer-events-none inset-y-1 start-1 ps-3">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>

            {/* search input */}
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={handleChange}
            />
          </div>

          {/* Nav Links */}
          <div className="text-center">
            <ul className="flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:flex md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className="block px-3 py-2 text-white rounded active:text-blue-700 md:bg-transparent md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className="block px-3 py-2 text-white rounded md:bg-transparent md:p-0 "
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tvshows"
                  className="block px-3 py-2 text-white rounded md:bg-transparent md:p-0 "
                >
                  TV Shows
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
