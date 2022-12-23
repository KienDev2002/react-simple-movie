import { Fragment } from "react";
// NavLink: link có active
import { NavLink, Route, Routes } from "react-router-dom";
import "swiper/scss";

import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";

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
                        path="/movies"
                        element={<MoviePage></MoviePage>}
                    ></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
