import { Fragment } from "react";
// NavLink: link có active
import { NavLink } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";

function App() {
    return (
        <Fragment>
            <header className="flex items-center justify-center py-10 mb-20 text-white header gap-x-5">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>

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
}

export default App;
