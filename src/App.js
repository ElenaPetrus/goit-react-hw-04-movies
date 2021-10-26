import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/Navigation/Navigation";
// import Container from "./components/Container/Container";
import HomePage from "./views/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
// import BookDetailsView from "./views/BookDetailsView";
// import NotFoundView from "./views/NotFoundView";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        {/* <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route> */}

        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
}
