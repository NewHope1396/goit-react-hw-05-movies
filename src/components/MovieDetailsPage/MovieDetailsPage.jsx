import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { getMovieById } from 'services/movieSearchApi';
import {
  MovieContainer,
  GoBackButton,
  Description,
  ButtonImage,
} from './MovieDetailsPage.styled';

const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
  const navigate = useNavigate();
  const location = useLocation();
  const pageFrom = `${location?.state?.from?.pathname ?? '/'}${
    location?.state?.from?.search ?? ''
  }`;

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <div>
        <MovieContainer>
          <div>
            <GoBackButton
              type="button"
              onClick={() => {
                navigate(pageFrom);
              }}
            >
              <ButtonImage></ButtonImage>Go back
            </GoBackButton>
            <img
              width="400px"
              src={imageBaseUrl + movie.backdrop_path}
              alt={movie.tagline}
            />
          </div>
          <Description>
            <h2>{movie.title + ` (${movie.release_date.slice(0, 4)})`}</h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
          </Description>
        </MovieContainer>
        <hr />
        <div>
          <p>Additional information</p>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: '#5fbcff' } : undefined
            }
            to="cast"
            state={{ from: location?.state?.from ?? null }}
          >
            Cast
          </NavLink>
          <br />
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: '#5fbcff' } : undefined
            }
            to="reviews"
            state={{ from: location?.state?.from ?? null }}
          >
            Reviews
          </NavLink>
        </div>
        <hr />
        <Suspense fallback={<h1>Загрузка...</h1>}>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />}></Route>
            <Route path="reviews" element={<Reviews id={movieId} />}></Route>
          </Routes>
        </Suspense>
      </div>
    )
  );
};

export default MovieDetailsPage;
