import {useState, useEffect, useParams} from 'react';
import{useHistory, useLocation} from 'react-router-dom';
import {fetchMovieDetails} from '../../services/apiService'

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);

  const {movieId} = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then((movie) => setFilm(movie));
  }, [movieId]);
  if (film === null) {
    return <h1> no data available</h1>;
  }

  const handleBack = () => {
    history.push(location?.state?.from);
  };

  return (
    <div>
      <button type="button" onClick={handleBack}>
        Go back
      </button>
      <h1>{film.title}</h1>
      <img src={`${BASE_URL}${film.backdrop_path}`} alt="" />
      <p>{film.overview}</p>
    </div>
  );
};

export default MovieDetailsPage;
