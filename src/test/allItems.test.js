import { itemCounter } from '../modules/movies.js';

const movieID = [
  35814, 22622, 28417, 38923, 27387, 28376, 24493, 2589, 41883, 27195,
];
describe('all items on home page', () => {
  test('number of items on home page', () => {
    let allMovies = itemCounter(movieID);
    expect(allMovies).toHaveLength(10);
    movieID.push(4567);
    allMovies = itemCounter(movieID);
    expect(allMovies).toHaveLength(11);
    movieID.push(3569);
    allMovies = itemCounter(movieID);
    expect(allMovies).toHaveLength(12);
  });
});
