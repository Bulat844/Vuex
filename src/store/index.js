import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default createStore({
  state() {
    return {
      movies: [],
    };
  },
  actions,
  mutations,
  getters,
});
