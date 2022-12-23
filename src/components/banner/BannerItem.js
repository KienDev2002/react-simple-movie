import React from "react";

const BannerItem = ({ item }) => {
    const { title, poster_path } = item;
    return (
        <div className="relative w-full h-full rounded-lg">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
            <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
                className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute w-full text-white left-5 bottom-5">
                <h2 className="mb-3 text-3xl font-bold">{title}</h2>
                <div className="flex items-center mb-8 gap-x-3">
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                    <span className="px-4 py-2 border border-white rounded-md">
                        Adventure
                    </span>
                </div>
                <button className="px-6 py-3 font-medium text-white capitalize rounded-lg bg-primary">
                    Watch now
                </button>
            </div>
        </div>
    );
};

export default BannerItem;