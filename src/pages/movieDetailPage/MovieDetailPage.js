import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

import { fetcher, tmdbAPI } from "~/config";
import MovieMeta from "../../components/movie/movieDetail/MovieMeta";
import MovieDetailPageSkeleton from "./MovieDetailPageSkeleton";
const MovieDetailPage = () => {
    // useParams: get id trên thanh trình duyệt, return movieId
    const { movieId } = useParams();
    const { data, error } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    const isLoading = !data && !error;

    if (!data) return;
    const { backdrop_path, poster_path, title, genres, overview } = data;

    return (
        <>
            {isLoading ? (
                <MovieDetailPageSkeleton></MovieDetailPageSkeleton>
            ) : (
                <Fragment>
                    <div className="w-full h-[600px] relative">
                        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                        <div
                            className="w-full h-full bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${tmdbAPI.imageOriginal(
                                    backdrop_path
                                )})`,
                            }}
                        ></div>
                    </div>
                    <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10">
                        <img
                            src={tmdbAPI.imageOriginal(poster_path)}
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
                    <MovieMeta type="credits"></MovieMeta>
                    <MovieMeta type="videos"></MovieMeta>
                    <MovieMeta type="similar"></MovieMeta>
                </Fragment>
            )}
        </>
    );
};

export default MovieDetailPage;
