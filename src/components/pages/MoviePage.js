import React, { useEffect, useState } from "react";
import useSWR from "swr";

import { fetcher } from "../../config";
import MovieCard from "../movie/MovieCard";
import useDebounce from "../hooks/useDebounce";

const MoviePage = () => {
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200`
    );
    // 500 seconds sẽ change input
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChangge = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        if (filterDebounce) {
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200&query=${filterDebounce}`
            );
        } else {
            setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200`
            );
        }
    }, [filterDebounce]);
    const { data } = useSWR(url, fetcher);
    const movies = data?.results || [];
    return (
        <div className="py-10">
            <div className="flex mb-4">
                <div className="flex-1">
                    <input
                        onChange={handleFilterChangge}
                        type="text"
                        className="w-full p-4 text-white rounded-l-lg rounded-bl-lg outline-none bg-slate-800"
                        placeholder="Type here to search"
                    />
                </div>
                <button className="p-4 text-white rounded-r-lg rounded-br-lg bg-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-4 gap-10">
                {movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
        </div>
    );
};

export default MoviePage;
