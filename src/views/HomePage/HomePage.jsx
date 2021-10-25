import MoviesList  from '../../components/MoviesList/MoviesList'
import {useState, useEffect} from 'react'
import getTrandingMovies from '../../services/apiService'



const HomePage =()=>{
    const [movies, SetMovies] =useState([])

useEffect(()=>{
    getTrandingMovies().then(films=>SetMovies(films.results))

},[]);

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
        <h1>Find the film</h1>
        <MoviesList movies={[]}/>
        </>
    )
}

export default HomePage