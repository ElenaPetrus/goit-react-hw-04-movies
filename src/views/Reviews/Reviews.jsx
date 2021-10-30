import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReviews} from '../../services/apiService'

import s from './Reviews.module.css';


export default function Reviews() {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);


  
    useEffect(() => {
        fetchMovieReviews(movieId)
        .then((rev) => {
          setReviews(rev);
        })
        .catch(error => {
            console.error('There is an arror with reviews, error');
            setError(error);

        });
    }, [movieId]);

    if (reviews.length === 0) {
      return <h3>There is any review for this movie.</h3>;
    }
  
    return (
      <>
      <ul>
        {reviews.map(review => {
        return(
        <li key={review.id} className={s.item}>
            <div>
            <h3 className={s.author}>{review.author}</h3>
            <p>{review.content}</p>
            </div>
        </li>
            );
            })}
          </ul>
      </>
    );
  }
  