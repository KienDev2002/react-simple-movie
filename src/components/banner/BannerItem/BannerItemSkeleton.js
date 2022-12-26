import React from "react";
import LoadingSkeleton from "~/components/loading/LoadingSkeleton";

const BannerItemSkeleton = () => {
    return (
        <div className="relative w-full h-full rounded-lg">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>

            <LoadingSkeleton className="object-cover w-full h-full rounded-lg"></LoadingSkeleton>
            <div className="absolute w-full text-white left-5 bottom-5">
                <LoadingSkeleton
                    className="mb-3 text-3xl font-bold"
                    width="300px"
                    height="50px"
                ></LoadingSkeleton>
                <div className="flex items-center mb-8 gap-x-3">
                    <LoadingSkeleton
                        className="px-4 py-2 border border-white rounded-md"
                        width="100px"
                        height="50px"
                    ></LoadingSkeleton>
                    <LoadingSkeleton
                        className="px-4 py-2 border border-white rounded-md"
                        width="100px"
                        height="50px"
                    ></LoadingSkeleton>
                </div>

                <LoadingSkeleton
                    width="100px"
                    height="50px"
                    radius="6px"
                ></LoadingSkeleton>
            </div>
        </div>
    );
};

export default BannerItemSkeleton;
