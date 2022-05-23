import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const KEY = '3662e1e1e310f2d86e2df06898df7080';

export async function getPopularMovies() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id) {
  try {
    const response = await axios.get(`movie/${id}?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(id) {
  try {
    const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
