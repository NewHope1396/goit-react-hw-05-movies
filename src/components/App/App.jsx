import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from './App.styled';

const HomePage = lazy(() => import('components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <Container>
      <Navigation></Navigation>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
