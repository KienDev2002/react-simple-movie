import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";

import FallbackComponent from "~/components/error/FallbackComponent";

import MovieCard from "../../movieCard/MovieCard";
import { withErrorBoundary } from "react-error-boundary";
const MovieSimilar = ({ results }) => {
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
                    {results.length > 0 &&
                        results.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};

MovieSimilar.propTypes = {
    results: PropTypes.array.isRequired,
};

export default withErrorBoundary(MovieSimilar, { FallbackComponent });
