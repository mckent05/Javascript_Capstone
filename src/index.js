import './style.css';
import { movieID, getMyMovies } from './modules/movies.js';
import { getComments, postComment } from './modules/commentUpdate.js';

window.addEventListener('DOMContentLoaded', () => {
  getMyMovies(movieID);
});
