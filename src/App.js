//lazy, Suspense: Code splitting Routes: mỗi page thì load page đó, ko load page ko liên quan
import { Fragment, lazy, Suspense } from "react";
// NavLink: link có active
import { Route, Routes } from "react-router-dom";
import "swiper/scss";

import Main from "~/components/layout/Main";
import MoviePageLoadMore from "~/pages/moviePage/MoviePageLoadMore";
import PageNotFound from "./pages/PageNotFound";

const MovieDetailPage = lazy(() =>
    import("~/pages/movieDetailPage/MovieDetailPage")
);
const HomePage = lazy(() => import("~/pages/HomePage"));
const MoviePage = lazy(() => import("~/pages/moviePage/MoviePage"));

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
                            // element={<MoviePage></MoviePage>}
                            element={<MoviePageLoadMore></MoviePageLoadMore>}
                        ></Route>
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetailPage></MovieDetailPage>}
                        ></Route>

                        <Route
                            path="*"
                            element={<PageNotFound></PageNotFound>}
                        ></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
