<template>
  <div>
    <h1>Items from Server</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import TodoItem from './TodoItem'


  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        items: []
      };
    },
    created() {
      this.$spring.get(`/api/items`)
      .then(response => {
        this.items = response.data;
      });
    }
  };
</script>

