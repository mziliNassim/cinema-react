// Movies Filter Options ===================
const include_adult = false;
const include_video = true;
const language = "en-US";
// const page = 1;
// const sort_by = "popularity.des";
// const include_null_first_air_dates = false;

// 'Discover' TV Shows API URL ===================
export const tvUrl = `https://api.themoviedb.org/3/discover/tv?include_adult=${include_video}`;

// 'Search' TV Shows API URL by  ===================
export const tvUrlBySearch = `https://api.themoviedb.org/3/search/tv?&include_adult=${include_adult}&language=${language}`;