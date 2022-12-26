export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const api_key = "6e1eb12ab3735cf3feb3ab8c6dc7b200";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";

export const tmdbAPI = {
    getMovieList: (type, page = 1) =>
        `${tmdbEndpoint}/${type}?api_key=${api_key}&page=${page}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${api_key}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${api_key}`,
    getMovieSearch: (query, page) =>
        `${tmdbEndpointSearch}?api_key=${api_key}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
