<template>
  <div>
    <p>{{ state }}</p>
    <p>二倍</p>
    <p>{{ doubleState }}</p>
    <router-link to="/inc">inv</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters(["doubleState"]),
    state() {
      return this.$store.state.count;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
