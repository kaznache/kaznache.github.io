<template>
  <a :href="item.download_url" class="photo">
    <spinner v-if="!item.loaded && !error" />
    <div v-else-if="error" class="photo_error text-danger">{{ error }}</div>

    <img :src="item[imageSrc]" :alt="item.author" v-show="item.loaded" @load="imageLoaded" @error="imageFailed">

    <div class="photo_descr">
      <div class="photo_title">
        {{ item.author }}
      </div>
      <a :href="item.url" class="photo_link" target="_blank">
        {{ item.url }}
      </a>
    </div>
  </a>
</template>

<script>
import Spinner from '../Common/Spinner.vue';

export default {
  name: 'PhotosItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    grayscale: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Spinner
  },
  data () {
    return {
      error: ''
    };
  },
  computed: {
    imageSrc () {
      return this.grayscale ? 'grayscale_src' : 'src';
    }
  },
  methods: {
    imageLoaded () {
      this.item.loaded = true;
    },
    imageFailed (event) {
      this.error = `Image URL ${event.target.src} is invalid`;
    }
  }
}
</script>

<style lang="sass" scoped>
.photo
  background-color: #eee
  width: 366px
  height: 267px
  overflow: hidden
  position: relative
  color: inherit
  margin-bottom: 16px
  display: block
  text-decoration: none
  &:nth-child(odd)
    margin-right: 16px
  &:hover
    text-decoration: none
    color: inherit
    img
      filter: blur(2px)
  img
    max-width: 100%
    width: 100%
    height: auto
    transition: all .2s ease-in
  .spinner
    height: 100%
    display: flex
    align-items: center
    justify-content: center
.photo_descr
  width: 100%
  background-color: rgba(0, 0, 0, .5)
  color: #fff
  padding: 18px 15px
  transform: translateY(-100%)
.photo_title
  font-size: 20px
  line-height: 1em
  margin-bottom: 5px
  font-weight: 100
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
.photo_link
  display: block
  font-size: 12px
  line-height: 1em
  color: #fff
  text-decoration: none
  font-weight: 100
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  &:hover
    color: #fff
    text-decoration: underline
.photo_error
  height: 100%
  padding: 50px
  text-align: center
  font-size: 13px
</style>
