import {useState, useEffect, lazy, Suspense} from 'react';
import{useHistory, useLocation, useParams,  useRouteMatch, Route, NavLink} from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {fetchMovieDetails} from '../../services/apiService'
import Loader from "../../components/Loader/Loader";
import noimage from '../../assets/img/no_picture.jpg';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import s from './MovieDetails.module.css';

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Cast = lazy(() =>
  import('../Cast/Cast' /*webpackChungName: "cast"*/),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /*webpackChungName: "reviews"*/),
);

const MovieDetailsPage = () => {
  const [Film, setFilm] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then((movie) => setFilm(movie)).catch(error =>{
      console.error('Problems with fetch movie details in api, error');
      setError(error);
  });
  }, [movieId]);
  if (Film === null) {
    return <h1> no details for this film</h1>;
  }


  const handleBack = () => {
    history.push(location?.state?.from ?? '/');

    if (location?.state?.from === '/movies') {
      history.push({
        pathname: location.state.from,
        search: `?query=${location.state.search}`,
      });
    }

  };

  return (
    <div>
      <button className={s.btn} type="button" onClick={handleBack}>
      <span className={s.btnText}>  &#129044; Go back </span>
      </button>

      {Film && (
        <>
        <div className={s.filmCard}>
      <img src={Film.backdrop_path
        ?`${BASE_URL}${Film.backdrop_path}`
        : noimage}
         alt="" />
         <div className={s.details}>
         <h2 className={s.filmTitle}>{Film.title}</h2>
          <p className={s.info}>{Film.tagline}</p>
          <p className={s.info}>{Film.score}</p>
          <NavLink to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: {
                    from: location?.state?.from,
                    search: location.state.search,
                  },
                }} className={s.castTitle}>Cast</NavLink>
    <NavLink to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: {
                    from: location?.state?.from,
                    search: location.state.search,
                  },
                }} className={s.reviewTitle}> Reviews </NavLink>
         </div>
         </div>
     
      
  
              <Suspense fallback={<Loader />}>
                <Route path={`${path}/cast`}>
                  <Cast moveId={movieId} />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews smoveId={movieId} />
                </Route>
              </Suspense>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
