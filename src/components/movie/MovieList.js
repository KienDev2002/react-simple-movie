import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";

import { fetcher, tmdbAPI } from "~/config";
import MovieCard from "./MovieCard";

const MovieList = ({ types = "now_playing" }) => {
    const { data } = useSWR(tmdbAPI.getMovieList(types), fetcher);

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
