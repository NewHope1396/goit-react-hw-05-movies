import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/movieSearchApi';

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                width="100px"
                src={imageBaseUrl + actor.profile_path}
                alt=""
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
              <hr />
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;

Cast.propTypes = { id: PropTypes.string.isRequired };
