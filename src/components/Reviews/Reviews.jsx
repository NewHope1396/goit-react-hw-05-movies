import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/movieSearchApi';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>Autor: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = { id: PropTypes.string.isRequired };
