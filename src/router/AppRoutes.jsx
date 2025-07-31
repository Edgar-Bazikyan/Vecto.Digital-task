import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../components/pages/MainPage/MainPage";
import Main from "./Main";
import MoviesPage from "../components/pages/MoviesPage/MoviesPage";
import TvShowsPage from "../components/pages/TvShowsPage/TvShowsPage";
import SearchPage from "../components/pages/SearchPage/SearchPage";
import NotFoundPage from "../components/pages/NotFoundPage/NotFoundPage";
import data from "../data.json";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<MainPage />} />
                    <Route path='movies' element={<MoviesPage data={data['TendingNow']} />} />
                    <Route path='tvshows' element={<TvShowsPage data={data['TendingNow']} />} />
                    <Route path='search' element={<SearchPage data={data['TendingNow']} />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes