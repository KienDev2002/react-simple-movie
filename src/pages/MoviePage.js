import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ReactPaginate from "react-paginate";

import { fetcher, tmdbAPI } from "~/config";
import MovieCard from "~/components/movie/movieCard/MovieCard";
import useDebounce from "~/hooks/useDebounce";
import MovieCardSkeleton from "../components/movie/movieCard/MovieCardSkeleton";

// one page have 20 cards movie
const itemsPerPage = 20;
const MoviePage = () => {
    // page mỗi phân trang 1,2,3,...
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
    // 500 seconds sẽ thay thế là change input
    const filterDebounce = useDebounce(filter, 500);
    const handleFilterChangge = (e) => {
        setFilter(e.target.value);
    };

    const { data, error } = useSWR(url, fetcher);
    const isLoading = !data && !error;

    const movies = data?.results || [];
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

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.total_results;
        setItemOffset(newOffset);
        setNextPage(event.selected + 1);
    };

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
                <div className="w-10 h-10 mx-auto border-4 border-t-4 rounded-full border-t-transparent animate-spin border-primary "></div>
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

            <div className="mt-10">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
        </div>
    );
};

export default MoviePage;
