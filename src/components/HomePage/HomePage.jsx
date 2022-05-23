import { useState, useEffect } from 'react';
import { getPopularMovies } from 'services/movieSearchApi';
import { Title, List, ListItem, MovieLink } from './HomePage.styled';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then(setPopularMovies);
  }, []);

  return (
    <div>
      <Title>Trendings today</Title>
      <List>
        {popularMovies.length > 0 &&
          popularMovies.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default HomePage;
