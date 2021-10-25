import {useState, useEffect, useParams} from 'react';
import{useHistory, useLocation} from 'react-router-dom';
import {fetchMovieDetails} from '../../services/apiService'

const BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieDetailsPage =()=>{
const [film, setFilm] =useState(null);
const {movieId} =useParams()
// console.log(movieId)
const history=useHistory();
const location=useLocation();

const handleBack = () => {
    history.push(location?.state?.from);
  };


useEffect(()=>{
    fetchMovieDetails(movieId).then(movie=>setFilm(movie));
},[movieId])
 if (film===null){
     return <h1>no data for this film</h1>
 }
    return (
        <>
        <button type="button" onClick={handleBack}>GO BACK</button>
        <h1>{film.title}</h1>
        <img srs={`${BASE_URL}${film.backdrop_path}`} alt=""/>
        <p>{film.title}</p>
        </>
    );
}

export default MovieDetailsPage
