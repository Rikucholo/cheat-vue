<template>
  <div>
    <button @click="rc(2)">＋＋</button>
    <button @click="incre()">＋＋</button>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "inc",
  methods: {
    ...mapMutations(["rc"]),
    incre() {
      this.$store.dispatch("incre", 3);
    },
  },
};
</script>
