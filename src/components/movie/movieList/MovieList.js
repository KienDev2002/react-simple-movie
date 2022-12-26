import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

import { fetcher, tmdbAPI } from "~/config";
import MovieCard from "../movieCard/MovieCard";
import FallbackComponent from "~/components/error/FallbackComponent";
import MovieCardSkeleton from "~/components/movie/movieCard/MovieCardSkeleton";

const MovieList = ({ types = "now_playing" }) => {
    const { data, error } = useSWR(tmdbAPI.getMovieList(types), fetcher);
    const isLoading = !data && !error;
    const movies = data?.results || [];

    return (
        <div>
            <div className="movie-list">
                {isLoading ? (
                    <Swiper
                        grabCursor={"true"}
                        spaceBetween={27}
                        slidesPerView={"auto"}
                    >
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCardSkeleton></MovieCardSkeleton>
                        </SwiperSlide>
                    </Swiper>
                ) : (
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
                )}
            </div>
        </div>
    );
};

MovieList.propTypes = {
    types: PropTypes.string.isRequired,
};

export default withErrorBoundary(MovieList, {
    FallbackComponent,
});
