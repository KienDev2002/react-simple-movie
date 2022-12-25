import React from "react";
import { useParams } from "react-router-dom";

import useSWR from "swr";

import { api_key, fetcher } from "../../config";

const MovieVideo = () => {
    const { movieId } = useParams();

    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`,
        fetcher
    );

    if (!data) return null;

    console.log(data);

    //<iframe width="967" height="544" src="https://www.youtube.com/embed/i0NiRBnXi3g" title="Một Chút EDM Mix Chill ♫ Top 20 Bản EDM Điện Tử Gaming Music Hay Nhất Cho Ngày Dài Mệt Mỏi Gây Ghiện" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    return <div></div>;
};

export default MovieVideo;
