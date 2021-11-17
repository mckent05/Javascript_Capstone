import './style.css';
import { movieID, getMyMovies } from './modules/movies.js';

window.addEventListener('DOMContentLoaded', () => {
  getMyMovies(movieID);
});
