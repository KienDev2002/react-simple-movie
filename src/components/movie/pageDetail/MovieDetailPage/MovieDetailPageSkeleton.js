import React, { Fragment } from "react";
import LoadingSkeleton from "~/components/loading/LoadingSkeleton";
import MovieMeta from "~/components/movie/pageDetail/moveMeta/MovieMeta";

const MovieDetailPageSkeleton = () => {
    return (
        <Fragment>
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-25"></div>
                <LoadingSkeleton className="w-full h-full bg-no-repeat bg-cover"></LoadingSkeleton>
            </div>
            <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10">
                <LoadingSkeleton className="object-cover w-full h-full rounded-xl"></LoadingSkeleton>
            </div>

            <LoadingSkeleton
                className="mx-auto mt-10 mb-10 text-4xl font-bold text-center text-white"
                width="150px"
                height="30px"
            ></LoadingSkeleton>
            <div className="flex items-center justify-center mb-10 gap-x-5">
                <LoadingSkeleton
                    width="120px"
                    height="50px"
                    className="px-4 py-2 border rounded-sm border-primary text-primary"
                ></LoadingSkeleton>
                <LoadingSkeleton
                    width="120px"
                    height="50px"
                    className="px-4 py-2 border rounded-sm border-primary text-primary"
                ></LoadingSkeleton>
                <LoadingSkeleton
                    width="120px"
                    height="50px"
                    className="px-4 py-2 border rounded-sm border-primary text-primary"
                ></LoadingSkeleton>
            </div>

            <LoadingSkeleton className="mb-10 text-center leading-relaxed max-w-[600px] mx-auto"></LoadingSkeleton>
            <MovieMeta type="credits"></MovieMeta>
            <MovieMeta type="videos"></MovieMeta>
            <MovieMeta type="similar"></MovieMeta>
        </Fragment>
    );
};

export default MovieDetailPageSkeleton;
