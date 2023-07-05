export default {
  addMovie({ commit }, movie) {
    commit('addMovie', movie);
  },
  removeMovie({ commit }, movieId) {
    commit('removeMovie', movieId);
  },
};
