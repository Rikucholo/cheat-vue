<template>
 <div id="FilterFilter">
  <h2>{{ title }}</h2>
  <h3>{{ upper }}</h3>
  <h3>{{ sub | toupper }}</h3>
  <h3>{{ main | toupper }}</h3>
  <h3>{{ low | lower }}</h3>
 </div>
</template>

<script>
export default {
  name: 'FilterFilter',
  
  data(){
    return {
      title: "hello world",
      sub: "sub hello",
      main: "sukmkb hello",
      low: "SDRGS",
    };
  },

  computed:{
    upper(){
      return this.title.toUpperCase();
    }
  },

  filters:{
    lower(value){
      return value.toLowerCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
