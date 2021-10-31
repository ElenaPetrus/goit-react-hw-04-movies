import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import NavBar from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

// import Container from "./components/Container/Container";
// import HomePage from "./views/HomePage/HomePage";
// import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
// import MoviesPage from "./views/MoviesPage/MoviesPage";
// import NotFindView from "./views/NotFindView/NotFindView";
import s from './App.module.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import(
    './views/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  ),
);
const NotFindView = lazy(() =>
  import(
    './views/NotFindView/NotFindView.jsx' /* webpackChunkName: "not-find-view" */
  ),
);

export default function App() {
  return (
    <div className={s.container}>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route
            path="/movies/:movieId"
            className={s.link}
            activeClassName={s.activeLink}
          >
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFindView />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
      <ToastContainer autoClose={2500} />
    </div>
  );
}
