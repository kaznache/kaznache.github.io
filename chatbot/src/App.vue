<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="display-3 title">Let's google!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <search-input @submit="search" :loading="loading" />

          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>

          <h1 v-if="history.length" class="__margin-top_30">History:</h1>
          <search-history :items="history" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from './api';
import SearchInput from './components/SearchInput';
import SearchHistory from './components/SearchHistory';

export default {
  name: 'App',
  components: {
    SearchInput,
    SearchHistory
  },
  data () {
    return {
      history: [],
      loading: false,
      error: ''
    };
  },
  methods: {
    search (query) {
      this.loading = true;
      api.getSearchResults(query)
      .then((res) => {
        const items = res.data.items;
        if (items && items.length) {
          const date = new Date().toLocaleString('ru');
          this.history.push({
            id: this.history.length,
            query,
            date,
            ...res.data.items[0]
          });
        }
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>

<style lang="sass">
.__margin-top_30
  margin-top: 30px
.title
  margin: 50px 0
</style>
