<template>
  <div>
    <h1>Items from Server</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        items: []
      }
    },
    created() {
      this.$spring.get(`/api/items`)
        .then(response => {
          this.items = response.data;
        })
    }
  }
</script>

