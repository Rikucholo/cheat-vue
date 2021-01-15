<template>
  <div id="app">
<FilterFilter/>
  </div>
</template>

<script>
import FilterFilter from './components/FilterFilter.vue'

export default {
  name: 'App',
  components: {
    FilterFilter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
