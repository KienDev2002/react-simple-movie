import { Fragment } from "react";
// NavLink: link có active
import { Route, Routes } from "react-router-dom";
import "swiper/scss";

import Main from "~/components/layout/Main";
import MovieDetailPage from "~/components/movie/MovieDetailPage";
import HomePage from "~/components/pages/HomePage";
import MoviePage from "~/components/pages/MoviePage";

function App() {
    return (
        <Fragment>
            <Routes>
                {/* ko có path và la cha của HomePage để page nào cũng có header là main */}
                <Route element={<Main></Main>}>
                    {/* Outlet: bên main là cha để hiển thị component HomePage: trang chủ */}
                    <Route path="/" element={<HomePage></HomePage>}></Route>

                    {/* page movies */}
                    <Route
                        path="/movie"
                        element={<MoviePage></MoviePage>}
                    ></Route>
                    <Route
                        path="/movie/:movieId"
                        element={<MovieDetailPage></MovieDetailPage>}
                    ></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
