export default {
  addMovie(state, movie) {
    state.movies.push(movie);
  },
  removeMovie(state, movieId) {
    state.movies = state.movies.filter(movie => movie.id !== movieId);
  },
};
