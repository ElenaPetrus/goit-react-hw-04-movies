import {useState} from 'react';
import {useHistory,useLocation} from 'react-router-dom'
import { fetchMovie } from '../../services/apiService';
import MoviesList from '../../components/MoviesList/MoviesList'

const MoviesPage= ()=>{
const [query, setQuery] =useState ('');
const[foundMovies, setFoundMovies]=useState ([]);

const history = useHistory();
const location =useLocation();

const handleChange =(e)=>{
setQuery(e.currentTarget.value)
}

const handleSubmit = e => {
    e.preventDefault();
    fetchMovie(query).tnen(resp=>setFoundMovies(resp))

    history.push({
      ...location,
      search: `query=${query}`,

    });
  };

//   useEffect (()=>{
//     if(location.search!===""){
//         fetchMovie(location.search.split("=")[1]).tnen(resp=>setFoundMovies(resp)) 

//     }},[location]);

    return (
       <div>
           <form onSubmit={handleSubmit}>
               <input onChange ={handleChange}/>
           </form>
           <MoviesList movies={foundMovies}/>
       </div>
    )
}

export default MoviesPage

