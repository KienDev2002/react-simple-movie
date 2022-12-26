import { useParams } from "react-router-dom";
import useSWR from "swr";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import { fetcher, tmdbAPI } from "~/config";
import MovieCredits from "./MovieCredits";
import MovieVideo from "./MovieVideo";
import MovieSimilar from "./MovieSimilar";
import FallbackComponent from "~/components/error/FallbackComponent";

const MovieMeta = ({ type = "videos" }) => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher);
    if (!data) return null;

    if (type === "credits") {
        const { cast } = data;
        if (!cast || cast.length <= 0) return null;
        return <MovieCredits cast={cast}></MovieCredits>;
    } else {
        const { results } = data;
        if (!results || results.length <= 0) return null;
        switch (type) {
            case "videos":
                return <MovieVideo results={results}></MovieVideo>;

            case "similar":
                return <MovieSimilar results={results}></MovieSimilar>;
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
