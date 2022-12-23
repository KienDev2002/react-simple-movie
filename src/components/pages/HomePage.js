import React, { Fragment } from "react";
import Banner from "../banner/Banner";
import MovieList from "../movie/MovieList";

const HomePage = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <section className="pb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl font-bold text-white capitalize">
                    Now playing
                </h2>
                <MovieList types="now_playing"></MovieList>
            </section>

            <section className="pb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl font-bold text-white capitalize">
                    Top Rated
                </h2>
                <MovieList types="top_rated"></MovieList>
            </section>
            <section className="pb-20 movies-layout page-container">
                <h2 className="mb-10 text-3xl font-bold text-white capitalize">
                    upcoming
                </h2>
                <MovieList types="upcoming"></MovieList>
            </section>
        </Fragment>
    );
};

export default HomePage;
