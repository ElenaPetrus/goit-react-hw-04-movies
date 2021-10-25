import { Switch, Route, Redirect } from "react-router-dom";
// import AppBar from "./components/AppBar/AppBar";
// import Container from "./components/Container/Container";
import HomePage from "./views/HomePage/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
// import BookDetailsView from "./views/BookDetailsView";
// import NotFoundView from "./views/NotFoundView";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/movies">
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

      <Route>
        <Redirect from="*" to="/" />
      </Route>
    </Switch>
  );
}
