import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "./MovieCard";
import { api_key, fetcher } from "../../config";
const MovieSimilar = () => {
    const { movieId } = useParams();

    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}`,
        fetcher
    );

    if (!data) return null;

    const movies = data?.results || [];

    return (
        <div className="py-10">
            <h2 className="mb-10 text-3xl font-medium text-center">
                Similar movies
            </h2>
            <div className="movie-list">
                <Swiper
                    grabCursor={"true"}
                    spaceBetween={27}
                    slidesPerView={"auto"}
                >
                    {movies.length > 0 &&
                        movies.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

export default MovieSimilar;
