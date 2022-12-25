import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { api_key, fetcher } from "../../config";
import MovieCredits from "./MovieCredits";
import MovieSimilar from "./MovieSimilar";
import MovieVideo from "./MovieVideo";
const MovieDetailPage = () => {
    // useParams: get id trên thanh trình duyệt, return movieId
    const { movieId } = useParams();

    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`,
        fetcher
    );

    if (!data) return;
    const { backdrop_path, poster_path, title, genres, overview } = data;

    return (
        <Fragment>
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                <div
                    className="w-full h-full bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
                    }}
                ></div>
            </div>
            <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10">
                <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt=""
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
            <h1 className="mt-10 mb-10 text-4xl font-bold text-center text-white">
                {title}
            </h1>
            {genres.length > 0 && (
                <div className="flex items-center justify-center mb-10 gap-x-5">
                    {genres.map((item) => (
                        <span
                            className="px-4 py-2 border rounded-sm border-primary text-primary"
                            key={item.id}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}

            <p className="mb-10 text-center leading-relaxed max-w-[600px] mx-auto">
                {overview}
            </p>
            <MovieCredits></MovieCredits>
            <MovieVideo></MovieVideo>
            <MovieSimilar></MovieSimilar>
        </Fragment>
    );
};

export default MovieDetailPage;
