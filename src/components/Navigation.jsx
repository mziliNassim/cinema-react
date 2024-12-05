import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

// import avatar from "../img/avatar.png";

const Navigation = () => {
  const [isToggeled, setIsToggeled] = useState(true);
  // const [user] = useState(false);
  // const [dropListUser, setDropListUser] = useState(true);
  const [displaySearch, setDisplaySearch] = useState(false);

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

  useEffect(() => {
    if (
      location.pathname.startsWith("/movies") ||
      location.pathname.startsWith("/tvshow")
    ) {
      setDisplaySearch(true);
    } else setDisplaySearch(false);

    // Scrool TO top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <>
      <nav className="p-0 m-0 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 m-0 mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold text-cyan-400 whitespace-nowrap">
              CinemA
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex-col hidden p-4 mt-4 font-medium bg-transparent border border-gray-100 rounded-lg md:flex md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className="block px-3 py-2 text-white rounded active:text-cyan-400 hover:text-cyan-400 md:bg-transparent md:p-0 "
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className="block px-3 py-2 text-white rounded hover:text-cyan-400 active:text-cyan-400 md:bg-transparent md:p-0 "
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshows"
                className="block px-3 py-2 text-white rounded hover:text-blue-400 active:text-blue-700 active:underline md:bg-transparent md:p-0 "
              >
                TV Shows
              </NavLink>
            </li>
          </ul>

          {/* Nav links && Search Input */}
          <div className="flex md:order-2 ">
            {/* responsive Search Icon */}
            {displaySearch && (
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
            )}

            {/* Search && user */}
            <div className="relative items-center hidden gap-3 md:flex">
              {displaySearch && (
                <>
                  {/* search icon "in input" */}
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

                  {/* Search */}
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    onChange={handleChange}
                  />
                </>
              )}

              {/* user */}
              {/* <>
                {user ? (
                  <>
                    <img
                      onClick={() => setDropListUser(!dropListUser)}
                      id="avatarButton"
                      type="button"
                      data-dropdown-toggle="userDropdown"
                      data-dropdown-placement="bottom-start"
                      className="w-10 h-10 p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500"
                      src={avatar}
                      alt="User dropdown"
                    />

                    <div
                      id="userDropdown"
                      className={`${
                        dropListUser && "hidden"
                      } z-10  absolute right-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">
                          name@flowbite.com
                        </div>
                      </div>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="avatarButton"
                      >
                        <li>
                          <Link
                            to="/user/profile"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/user/favorites"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Favorites
                          </Link>
                        </li>
                      </ul>
                      <div className="py-1">
                        <Link
                          to="/Logout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/user/login"
                      className="relative text-center w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                      <span className=" w-full px-1 py-1.5 transition-all ease-in duration-75 text-cyan-400 hover:text-white bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Login
                      </span>
                    </Link>
                  </>
                )}
              </> */}
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
          {displaySearch && (
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
          )}

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
