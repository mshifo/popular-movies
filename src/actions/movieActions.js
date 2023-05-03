// src/actions/movieActions.js
import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = (page) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then((response) => {
        const movies = response.data.results;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
};