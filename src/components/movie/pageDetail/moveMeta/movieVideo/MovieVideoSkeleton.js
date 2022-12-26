import React from "react";

import LoadingSkeleton from "~/components/loading/LoadingSkeleton";

const MovieVideoSkeleton = () => {
    return (
        <div className="py-10">
            <h2 className="mb-10 text-3xl text-center">Trailers</h2>
            <div className="flex flex-col gap-10">
                <div>
                    <LoadingSkeleton
                        className="inline-block p-2 mb-5 text-xl font-medium bg-secondary"
                        width="300px"
                        height="50px"
                    ></LoadingSkeleton>
                    <div className="w-full aspect-video">
                        <LoadingSkeleton
                            width="967"
                            height="544"
                            className="object-fill w-full h-full"
                        ></LoadingSkeleton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieVideoSkeleton;
