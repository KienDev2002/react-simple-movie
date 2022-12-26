import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import useSWR from "swr";

import { fetcher } from "~/config";
import BannerItem from "./BannerItem";

const Banner = () => {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=6e1eb12ab3735cf3feb3ab8c6dc7b200`,
        fetcher
    );

    const movies = data?.results || [];

    return (
        <section className="banner h-[500px] page-container mb-20 overflow-hidden">
            <Swiper grabCursor="true" slidesPerView={"auto"}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

export default Banner;
