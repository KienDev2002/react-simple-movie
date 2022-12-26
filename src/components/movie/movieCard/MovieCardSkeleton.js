import React from "react";
import LoadingSkeleton from "~/components/loading/LoadingSkeleton";

const MovieCardSkeleton = () => {
    return (
        <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
            <LoadingSkeleton
                className="mb-5"
                width="100%"
                height="250px"
                radius="8px"
            ></LoadingSkeleton>

            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl font-bold ">
                    <LoadingSkeleton
                        width="100%"
                        height="20px"
                    ></LoadingSkeleton>
                </h3>
                <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                    <span>
                        <LoadingSkeleton
                            width="50%"
                            height="10px"
                        ></LoadingSkeleton>
                    </span>
                    <span>
                        <LoadingSkeleton
                            width="30%"
                            height="10px"
                        ></LoadingSkeleton>
                    </span>
                </div>
                <LoadingSkeleton
                    width="100%"
                    radius="6px"
                    height="40px"
                ></LoadingSkeleton>
            </div>
        </div>
    );
};

export default MovieCardSkeleton;
