<template>
  <div id="app">
    <customdirective/>
  </div>
</template>

<script>
import customdirective from './components/customdirective.vue'

export default {
  name: 'App',
  components: {
    customdirective
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
