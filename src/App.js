import { Fragment } from "react";
// NavLink: link có active
import { NavLink } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <header className="header flex text-white items-center justify-center gap-x-5 py-10 mb-20">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>

            <section className="banner h-[500px] page-container mb-10">
                <div className="w-full h-full rounded-lg relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
                    <img
                        src="https://i2.wp.com/oshawaexpress.ca/wp/wp-content/uploads/2019/05/avengers-endgame-crop.jpg?fit=1000%2C563&ssl=1"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-3">
                            Avengers: Endgame
                        </h2>
                        <div className="flex items-center gap-x-3 mb-8">
                            <span className="py-2 px-4 border border-white rounded-md">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border border-white rounded-md">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border border-white rounded-md">
                                Adventure
                            </span>
                        </div>
                        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium capitalize">
                            Watch now
                        </button>
                    </div>
                </div>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="capitalize text-white mb-10 font-bold text-3xl">
                    Now playing
                </h2>
                <div className="movie-list grid grid-cols-4 gap-10 ">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
                        <img
                            src="https://i2.wp.com/oshawaexpress.ca/wp/wp-content/uploads/2019/05/avengers-endgame-crop.jpg?fit=1000%2C563&ssl=1"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        <h3 className=" font-bold text-xl mb-3">
                            Spiderman: Homecoming
                        </h3>
                        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>

                        <button className="py-3 px-6 rounded-lg bg-primary  capitalize w-full ">
                            Watch now
                        </button>
                    </div>
                </div>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="capitalize text-white mb-10 font-bold text-3xl">
                    Top rated
                </h2>
                <div className="movie-list grid grid-cols-4 gap-10 ">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
                        <img
                            src="https://i2.wp.com/oshawaexpress.ca/wp/wp-content/uploads/2019/05/avengers-endgame-crop.jpg?fit=1000%2C563&ssl=1"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        <h3 className=" font-bold text-xl mb-3">
                            Spiderman: Homecoming
                        </h3>
                        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>

                        <button className="py-3 px-6 rounded-lg bg-primary  capitalize w-full ">
                            Watch now
                        </button>
                    </div>
                </div>
            </section>

            <section className="movies-layout page-container pb-20">
                <h2 className="capitalize text-white mb-10 font-bold text-3xl">
                    Trending
                </h2>
                <div className="movie-list grid grid-cols-4 gap-10 ">
                    <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
                        <img
                            src="https://i2.wp.com/oshawaexpress.ca/wp/wp-content/uploads/2019/05/avengers-endgame-crop.jpg?fit=1000%2C563&ssl=1"
                            alt=""
                            className="w-full h-[250px] object-cover rounded-lg mb-5"
                        />

                        <h3 className=" font-bold text-xl mb-3">
                            Spiderman: Homecoming
                        </h3>
                        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                            <span>2017</span>
                            <span>7.4</span>
                        </div>

                        <button className="py-3 px-6 rounded-lg bg-primary  capitalize w-full ">
                            Watch now
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default App;
