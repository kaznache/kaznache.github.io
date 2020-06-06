<template>
    <ul class="list-group list-group-flush">
        <li v-for="item in items.slice().reverse()" :key="item.id" class="list-group-item">
            <div>
                <small class="text-muted">query: {{ item.query }}</small>
                <small class="text-muted float-right">{{ item.date }}</small>
            </div>
            <div v-if="item.error">
                {{ item.error }}
            </div>
            <div v-else>
                <a :href="item.link" v-html="item.htmlTitle"></a>
                <p v-html="item.htmlSnippet"></p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'SearchHistory',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
