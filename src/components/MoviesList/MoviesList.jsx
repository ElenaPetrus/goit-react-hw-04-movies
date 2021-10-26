import s from './MoviesList.module.css'
import {Link, useLocation} from 'react-router-dom';

const BASE_URL = "https://image.tmdb.org/t/p/w500";


export default function MoviesList ({movies}){
    const location =useLocation();
    return(
        <ul className={s.moviesList}>
{movies.map((movie)=>{
    return <li key={movie.id} className={s.movieItem}>
        <Link to={{pathname:`/movies/${movie.id}`, state: { from: location.pathname!=="/"?location.pathname+location.search:location.pathname}
}}>
        <img src={`${BASE_URL}${movie.poster_path}`} alt=""/>
        </Link>
    </li>
})}
        </ul>
    )
}
