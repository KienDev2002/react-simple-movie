export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const api_key = "6e1eb12ab3735cf3feb3ab8c6dc7b200";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";

export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${api_key}`,
    getMovieDetails: (movieId) =>
        `${tmdbEndpoint}/${movieId}?api_key=${api_key}`,
    getMovieMeta: (movieId, type) =>
        `${tmdbEndpoint}/${movieId}/${type}?api_key=${api_key}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
    image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
