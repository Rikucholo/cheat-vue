<template>
  <div id="NewCom">
    <h2>{{ title }}</h2>
    <h3>{{ upper }}</h3>
    <h3>{{ sub | toupper }}</h3>
    <h3>{{ main | toupper }}</h3>
    <h3>{{ low | lower }}</h3>
  </div>
</template>

<script>
import { Number } from "@/number";
export default {
  name: "NewCom",
  mixins: [Number],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
