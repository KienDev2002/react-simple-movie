import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";

import { fetcher } from "../../config";
import MovieCard from "./MovieCard";

//https://api.themoviedb.org/3/movie/550?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200

//https://api.themoviedb.org/3/movie/now_playing?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200

const MovieList = ({ types = "now_playing" }) => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${types}?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200`,
        fetcher
    );

    const movies = data?.results || [];

    return (
        <div>
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

export default MovieList;
