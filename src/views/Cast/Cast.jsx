import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieCast} from '../../services/apiService'

import noimage from '../../assets/img/no_image.png';
import s from './Cast.module.css';


export default function Cast() {
    const {movieId} = useParams();
    const [actors, setActors] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const BASE_URL = "https://image.tmdb.org/t/p/w500";
  
    useEffect(() => {
        fetchMovieCast(movieId)
        .then(({ cast }) => {
          if (cast.length === 0) {
            <p>There is no information about actors for this movie.</p>
            return;
          }
          setActors(cast);
        })
        .catch(error => {
          console.error('There is an arror with cast, error');
          setError(error);

        });
    }, [movieId]);
  
    return (
      <>
          <ul className={s.cast}>
            {actors.map(actor => (
              <li key={actor.id} className={s.item}>
                <img
                  src={
                    actor.profile_path
                      ? `${BASE_URL}${actor.profile_path}`
                      : noimage
                  }
                  alt={actor.original_name}
                  className={s.photo}
                />
                <h4 className={s.name}>{actor.original_name}</h4>
                <p className={s.character}>{actor.character}</p>
              </li>
            ))}
          </ul>
      </>
    );
  }
  