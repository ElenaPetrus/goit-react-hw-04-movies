import MoviesList  from '../../components/MoviesList/MoviesList'
import {useState, useEffect} from 'react'
import getTrandingMovies from '../../services/apiService';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



const HomePage =()=>{
    const [movies, SetMovies] =useState([])
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

useEffect(()=>{
    getTrandingMovies(page).then(films=>SetMovies(films.results)).catch(error =>{
        console.error('Problem with tranding movies in api, error');
        setError(error);
    })

},[page]);

const onLoadMore = () => {
      setPage(page + 1);
    };
  

// async function onFetchTrandingMovies() {
//     try {
//       setReqStatus('pending');
//       const movies = await fetchTrandingMovies();
//       setReqStatus('resolve');
//       if (movies.length === 0) {
//         toast.error('Oop, no movies!');
//       }
//       setMovies(movies);
//     } catch (error) {
//       setReqStatus('rejected');
//       toast.error('Oops, no match');
//     }
//   }
//   onFetchTrandingMovies();

    return (
        <>
        {movies.length > 0 ? 
        <MoviesList movies={movies}/>  : <ErrorMessage message={error}/>}
        {movies.length > 0 && <Button onLoadMore={onLoadMore} />}
        </>
    )
}

export default HomePage