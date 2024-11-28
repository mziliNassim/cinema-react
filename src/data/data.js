// import beinSport from "../img/white-channels/bein-sport.png";
// import cnn from "../img/white-channels/cnn.png";
// import disney from "../img/white-channels/disney.png";
// import espn from "../img/white-channels/espn.png";
// import foxMoviesChannel from "../img/white-channels/fox-movies-channel.png";
// import foxMovies from "../img/white-channels/fox-movies.png";
// import hbo from "../img/white-channels/hbo.png";
// import mbc from "../img/white-channels/mbc.png";
// import netflix from "../img/white-channels/netflix.png";
// import wallDiseny from "../img/white-channels/wall-diseny.png";

// Connect API Options (key...)===================
export const options = {
  movies: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk4OTJjYTcxNTg2ZDA2NTg1MTI5NGMwM2VmN2Y1MSIsIm5iZiI6MTczMTkzNjY1NS4xNzEzMjI4LCJzdWIiOiI2NmYwMzJjNDkyZDM5Njg1MzgzYjc2NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bNeE2-U0Ie_yJFM8Y9BWOS61PAxSf_xg8N649EuUxhQ",
    },
  },
  details: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk4OTJjYTcxNTg2ZDA2NTg1MTI5NGMwM2VmN2Y1MSIsIm5iZiI6MTczMTkzNjY1NS4xNzEzMjI4LCJzdWIiOiI2NmYwMzJjNDkyZDM5Njg1MzgzYjc2NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bNeE2-U0Ie_yJFM8Y9BWOS61PAxSf_xg8N649EuUxhQ",
    },
  },
};

// // Movies Filter Options ===================
// const include_adult = false;
// const include_video = true;
// const language = "en-US";
// const page = 1;
// const sort_by = "popularity.des";
// const include_null_first_air_dates = false;

// // 'Discover' Movies or TV Shows API URL ===================
// export const moviesUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=${include_adult}`;
// export const tvUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=${include_video}`;

// // 'Search' Movies or TV Shows API URL by  ===================
// export const moviesUrlBySearch = `https://api.themoviedb.org/3/search/movie?api_key=cf9892ca71586d065851294c03ef7f51`;
// export const tvUrlBySearch = `https://api.themoviedb.org/3/search/tv?&include_adult=${include_adult}&language=${language}`;

// // Movies API URL Details by ID ===================
// export const movieUrlDetailsById = `https://api.themoviedb.org/3/movie/`;

// Movies API URL Populaire ===================
export const movieUrlPopulaire = `https://api.themoviedb.org/3/movie/popular`;

// // Movies API URL Populaire ===================
// export const movieUrlTopRated = `https://api.themoviedb.org/3/movie/top_rated`;

// // Populair People API URL  ===================
// export const peopleUrlPopulair = `https://api.themoviedb.org/3/person/popular`;

// // ===================

// export const companysLogos = [
//   { id: 1, name: "beinSport", logo: beinSport },
//   { id: 2, name: "cnn", logo: cnn },
//   { id: 3, name: "disney", logo: disney },
//   { id: 4, name: "espn", logo: espn },
//   { id: 5, name: "foxMoviesChannel", logo: foxMoviesChannel },
//   { id: 6, name: "foxMovies", logo: foxMovies },
//   { id: 7, name: "hbo", logo: hbo },
//   { id: 8, name: "mbc", logo: mbc },
//   { id: 9, name: "netflix", logo: netflix },
//   { id: 10, name: "wallDiseny", logo: wallDiseny },
// ];
// // ===================
// export function getTextColorBasedOnBackground(bgColor) {
//   const rgb = bgColor.match(/\d+/g);

//   if (!rgb) return "#000"; // Default to black if no valid color

//   const brightness = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

//   return brightness > 0.5 ? "#000" : "#FFF";
// }

// // ===================
// export const filterComands = [
//   {
//     id: 1,
//     comandName: "Movies",
//     actions: [
//       { actionName: "Movies--1", link: "/movies/1" },
//       { actionName: "Movies--2", link: "/movies/2" },
//     ],
//   },
//   {
//     id: 2,
//     comandName: "Series",
//     actions: [
//       { actionName: "Series--1", link: "/series/1" },
//       { actionName: "Series--2", link: "/series/2" },
//     ],
//   },
//   {
//     id: 3,
//     comandName: "Animes",
//     actions: [
//       { actionName: "Animes--1", link: "/animes/1" },
//       { actionName: "Animes--2", link: "/animes/2" },
//     ],
//   },
//   {
//     id: 4,
//     comandName: "TV Shows",
//     actions: [
//       { actionName: "TV Shows--1", link: "/tvshow/1" },
//       { actionName: "TV Shows--2", link: "/tvshow/2" },
//     ],
//   },
//   {
//     id: 5,
//     comandName: "Year",
//     actions: [
//       { actionName: 2024, link: "/year/2024" },
//       { actionName: 2023, link: "/year/2023" },
//       { actionName: 2022, link: "/year/2022" },
//       { actionName: 2021, link: "/year/2021" },
//     ],
//   },
// ];
