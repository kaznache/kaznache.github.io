<template>
  <div class="photo-fetcher">
    <h1 class="photo-fetcher_title">Photo Fetcher</h1>

    <div class="photo-fetcher_panel">
      <switcher v-model="isGrayScale">Make photos grayscale</switcher>
      <button class="btn" @click.prevent="fetchPhotos">Fetch New Photos</button>
    </div>

    <spinner class="photo-fetcher_spinner" v-if="loading" />

    <photos-list v-else-if="!error">
      <photos-item v-for="(item, index) in items" :key="index" :item="item" :grayscale="isGrayScale" />
    </photos-list>

    <div v-else class="photo-fetcher_error p-3 bg-danger text-white">
      Oops! Error: {{ error }}.
      <a href="" @click.prevent="fetchPhotos">Try again</a>
    </div>
  </div>
</template>

<script>
  import PhotosList from './PhotosList';
  import PhotosItem from './PhotosItem';
  import Spinner from '../Common/Spinner.vue';
  import Switcher from '../Common/Switcher.vue';

  export default {
    name: 'PhotoFetcher',
    components: {
      PhotosList,
      PhotosItem,
      Spinner,
      Switcher
    },
    data () {
      return {
        error: '',
        items: [],
        itemsCount: 4,
        loading: false,
        requestCount: 0,
        isGrayScale: false
      };
    },
    created () {
      this.fetchPhotos();
    },
    methods: {
      async fetchPhotos () {
        const photosList = await this.getPhotosList() || [];
        this.items = this.prepareItems(photosList);
      },
      async getPhotosList () {
        this.loading = true;
        this.requestCount++;
        const response = await fetch(`https://picsum.photos/v2/list?page=${this.requestCount}&limit=100`);
        this.loading = false;
        if (response.ok) {
          return await response.json();
        } else {
          this.error = response.status;
        }
      },
      prepareItems (list) {
        let items = [];
        for (let i = 0; i < this.itemsCount; i++) {
          const randomIndex = this.getRandom(list.length);
          const item = list[randomIndex];
          const imageSrc = `https://picsum.photos/id/${item.id}/366/267`;
          items.push({
            ...item,
            loaded: false,
            src: imageSrc,
            grayscale_src: `${imageSrc}?grayscale`
          });
        }
        return items;
      },
      getRandom (max) {
        return Math.floor(Math.random() * max);
      }
    }
  }
</script>

<style lang="sass" src="./styles.sass"></style>
