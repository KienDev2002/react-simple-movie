import React from "react";

const MovieVideo = ({ results }) => {
    return (
        <div className="py-10">
            <h2 className="mb-10 text-3xl text-center">Trailers</h2>
            <div className="flex flex-col gap-10">
                {results.slice(0, 2).map((item) => (
                    <div className="" key={item.id}>
                        <h3 className="inline-block p-2 mb-5 text-xl font-medium bg-secondary">
                            {item.name}
                        </h3>
                        <div key={item.id} className="w-full aspect-video">
                            <iframe
                                width="967"
                                height="544"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title="Một Chút EDM Mix Chill ♫ Top 20 Bản EDM Điện Tử Gaming Music Hay Nhất Cho Ngày Dài Mệt Mỏi Gây Ghiện"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="object-fill w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieVideo;
