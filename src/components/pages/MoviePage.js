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
    // 500 seconds sẽ thay thế là change input
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChangge = (e) => {
        setFilter(e.target.value);
    };

    const { data, error } = useSWR(url, fetcher);
    const movies = data?.results || [];
    const loading = !data && !error;

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

    return (
        <div className="px-20 py-10">
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
            {loading && (
                <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-t-transparent animate-spin border-primary "></div>
            )}

            <div className="grid grid-cols-4 gap-10 mb-10">
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>

            <div className="flex items-center justify-center gap-x-5">
                <span className="cursor-pointer">
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
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </span>
                <span className="inline-block px-4 py-2 leading-none bg-white rounded-sm cursor-pointer text-slate-900">
                    1
                </span>
                <span className="cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default MoviePage;
