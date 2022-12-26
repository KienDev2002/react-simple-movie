//lazy, Suspense: Code splitting Routes: mỗi page thì load page đó, ko load page ko liên quan
import { Fragment, lazy, Suspense } from "react";
// NavLink: link có active
import { Route, Routes } from "react-router-dom";
import "swiper/scss";

import Main from "~/components/layout/Main";

const MovieDetailPage = lazy(() =>
    import("~/components/movie/pageDetail/MovieDetailPage/MovieDetailPage")
);
const HomePage = lazy(() => import("~/pages/HomePage"));
const MoviePage = lazy(() => import("~/pages/MoviePage"));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
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
            </Suspense>
        </Fragment>
    );
}

export default App;
