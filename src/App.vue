<template>
  <div>
    <h1>Movies</h1>
    <button @click="addMovie">Add Movie</button>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
        <button @click="deleteMovie(movie.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['movies']),
  },
  methods: {
    ...mapActions(['addMovie', 'removeMovie']),
    deleteMovie(movieId) {
      this.removeMovie(movieId);
    },
  },
  mounted() {
    this.$store.dispatch('fetchMovies');
  },
};
</script>
