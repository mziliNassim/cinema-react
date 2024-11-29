// Movies Filter Options ===================
const include_adult = false;
// const include_video = true;
// const language = "en-US";
// const page = 1;
// const sort_by = "popularity.des";
// const include_null_first_air_dates = false;

// 'Discover' Movies  API URL ===================
export const moviesUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=${include_adult}`;

// 'Search' Movies API URL by  ===================
export const moviesUrlBySearch = `https://api.themoviedb.org/3/search/movie?api_key=cf9892ca71586d065851294c03ef7f51`;

// Movies API URL Details by ID ===================
export const movieUrlDetailsById = `https://api.themoviedb.org/3/movie/`;

// Movies API URL Populaire ===================
export const movieUrlPopulaire = `https://api.themoviedb.org/3/movie/popular`;

// Movies API URL Top Rated ===================
export const movieUrlTopRated = `https://api.themoviedb.org/3/movie/top_rated`;

// Movies API URL Trends ===================
export const movieUrlTrendsWeek = `https://api.themoviedb.org/3/trending/movie/week?language=en-US`;
export const movieUrlTrendsDay = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

// Movies API URL Genre ===================
export const movieUrlGenre = `https://api.themoviedb.org/3/genre/movie/list`;
