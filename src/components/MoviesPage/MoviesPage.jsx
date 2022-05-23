import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { getMoviesByQuery } from 'services/movieSearchApi';
import { useSearchParams } from 'react-router-dom';
import { List, ListItem, MovieLink } from 'components/HomePage/HomePage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (!params.get('query')) {
      return;
    }
    getMoviesByQuery(params.get('query')).then(setMovies);
  }, [params]);

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          setParams(values);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type="text" name="query"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {movies.length > 0 && (
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <MovieLink to={`${movie.id}`}>{movie.title}</MovieLink>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default MoviesPage;
