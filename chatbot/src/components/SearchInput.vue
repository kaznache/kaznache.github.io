<template>
    <div class="inputSearch input-group mb-3">
        <input type="text" class="form-control" placeholder="Search" v-model="query" @keydown.enter.prevent="submit">
        <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="submit">
                <span class="spinner-border spinner-border-sm" v-if="loading"></span>
                <span v-else>Search</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      query: ''
    };
  },
  methods: {
    submit () {
      this.$emit('submit', this.query);
      this.query = '';
    }
  }
}
</script>

<style lang="sass">
.inputSearch button
    width: 100px
</style>
