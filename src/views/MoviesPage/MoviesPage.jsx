import {useState, useEffect} from 'react';
import {useHistory,useLocation} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovie } from '../../services/apiService';
import MoviesList from '../../components/MoviesList/MoviesList'
import Button from '../../components/Button/Button';
// import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import s from './MoviePage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.info('Nothing for request! Please type the word');
      return;
    }
    fetchMovie(query, page).then(resp => {
      if (resp.length < 1) {
        return toast.error('Nothing was found.');
      }setFoundMovies(resp);}).catch(error =>{
      console.error('Problems with fetch movie search in api, error');
      setError(error);
  })

  history.push({
    ...location,
    search: `query=${query}`,
  });
  
  };

  const onLoadMore = () => {
    fetchMovie(query, page+1).then((resp) => {
      setFoundMovies(prevState => [...prevState, ...resp]);
      setPage(prev=>prev + 1);
  
    });
  };

  // const onHandlePage = (page) => {
  //   history.push({ ...location, search: `query=${query}&page=${page}` });
  // };

  useEffect(() => {
    if (location.search !== "") {
      fetchMovie(location.search.split("=")[1]).then((resp) =>
        setFoundMovies(resp)
      );
      setQuery(location.search.split("=")[1]);
    }
  }, [location]);


 
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit} >
        <input  className={s.input} onChange={handleChange} name="query" value={query} />
        <button type="submit" className={s.btn}>
            <span className={s.label}>Click to find</span>
          </button>
      </form>
      <>
      <MoviesList movies={foundMovies} />
      {foundMovies.length > 0 && <Button onLoadMore={onLoadMore}/>}
      </>
    </div>
  );
};

export default MoviesPage;