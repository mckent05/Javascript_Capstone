import './style.css';
import { 
  movieID, getMyMovies, itemCounter, movieCounter,
} from './modules/movies.js';

window.addEventListener('DOMContentLoaded', () => {
  getMyMovies(movieID);
  const counter = itemCounter(movieID);
  movieCounter.innerHTML = `(${counter.length})`;
});
