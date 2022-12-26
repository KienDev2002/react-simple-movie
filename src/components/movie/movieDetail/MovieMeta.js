import { useParams } from "react-router-dom";
import useSWR from "swr";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { SwiperSlide, Swiper } from "swiper/react";

import { fetcher, tmdbAPI } from "~/config";
import MovieCredits from "~/components/movie/movieDetail/MovieCredits/MovieCredits";
import MovieVideo from "./movieVideo/MovieVideo";
import MovieSimilar from "./movieSimilar/MovieSimilar";
import FallbackComponent from "~/components/error/FallbackComponent";
import MovieCreditsSekeleton from "./MovieCredits/MovieCreditsSekeleton";
import MovieVideoSkeleton from "./movieVideo/MovieVideoSkeleton";
import MovieCardSkeleton from "~/components/movie/movieCard/MovieCardSkeleton";

const MovieMeta = ({ type = "videos" }) => {
    const { movieId } = useParams();
    const { data, error } = useSWR(
        tmdbAPI.getMovieMeta(movieId, type),
        fetcher
    );
    const isLoading = !data && !error;
    if (!data) return null;

    if (type === "credits") {
        const { cast } = data;
        if (!cast || cast.length <= 0) return null;
        return isLoading ? (
            <MovieCreditsSekeleton></MovieCreditsSekeleton>
        ) : (
            <MovieCredits cast={cast}></MovieCredits>
        );
    } else {
        const { results } = data;
        if (!results || results.length <= 0) return null;
        switch (type) {
            case "videos":
                return isLoading ? (
                    <MovieVideoSkeleton></MovieVideoSkeleton>
                ) : (
                    <MovieVideo results={results}></MovieVideo>
                );

            case "similar":
                return isLoading ? (
                    <div className="mb-10 movie-list">
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
                            <SwiperSlide>
                                <MovieCardSkeleton></MovieCardSkeleton>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                ) : (
                    <MovieSimilar results={results}></MovieSimilar>
                );
            default:
                break;
        }
        return null;
    }
};

MovieMeta.propTypes = {
    type: PropTypes.string.isRequired,
};

export default withErrorBoundary(MovieMeta, {
    FallbackComponent,
});
