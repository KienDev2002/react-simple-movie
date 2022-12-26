import React, { useEffect, useState } from "react";

import useSWRInfinite from "swr/infinite";

//create only id
import { v4 } from "uuid";

import { fetcher, tmdbAPI } from "~/config";
import MovieCard from "~/components/movie/movieCard/MovieCard";
import useDebounce from "~/hooks/useDebounce";
import MovieCardSkeleton from "../components/movie/movieCard/MovieCardSkeleton";
import Button from "~/components/button/Button";

// one page have 20 cards movie
const itemsPerPage = 20;
const MoviePageLoadMore = () => {
    // page mỗi phân trang 1,2,3,...
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
    // 500 seconds sẽ thay thế là change input
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChangge = (e) => {
        setFilter(e.target.value);
    };

    const { data, error, size, setSize } = useSWRInfinite(
        (index) => url.replace("page=1", `page=${index + 1}`),
        fetcher
    );

    const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
    const isLoading = !data && !error;
    const isEmpty = data?.[0]?.results.length === 0;

    const isReachingEnd =
        isEmpty ||
        (data && data[data.length - 1]?.results.length < itemsPerPage);

    // const { page, total_pages } = data;
    useEffect(() => {
        if (filterDebounce) {
            setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
        } else {
            setUrl(tmdbAPI.getMovieList("popular", nextPage));
        }
    }, [filterDebounce, nextPage]);

    // react-paginate
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    //tính total count
    useEffect(() => {
        if (!data || !data.total_results) return;
        setPageCount(Math.ceil(data.total_results / itemsPerPage));
    }, [data, itemOffset]);

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
            {isLoading && (
                <div className="grid grid-cols-4 gap-10">
                    {new Array(itemsPerPage).fill(0).map(() => (
                        <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-4 gap-10 mb-10">
                {!isLoading && movies.length > 0 ? (
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))
                ) : (
                    <>
                        <MovieCardSkeleton></MovieCardSkeleton>
                        <MovieCardSkeleton></MovieCardSkeleton>
                        <MovieCardSkeleton></MovieCardSkeleton>
                        <MovieCardSkeleton></MovieCardSkeleton>
                    </>
                )}
            </div>

            <div className="flex items-center justify-center mt-10">
                <Button
                    disabled={isReachingEnd}
                    onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
                    className={`${isReachingEnd ? "bg-slate-300" : ""}`}
                >
                    Load more
                </Button>
            </div>
        </div>
    );
};

export default MoviePageLoadMore;
