import './style.css';
import getMyMovies from './display.js';

const movieID = [35814, 22622, 28417, 38923, 27387, 28376, 24493, 2589, 41883];

window.addEventListener('DOMContentLoaded', () => {
  getMyMovies(movieID);
});
