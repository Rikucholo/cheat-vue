<template>
  <div>
    <button @click="rc(2)">＋＋</button>
    <button @click="incre(3)">＋＋</button>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "inc",
  methods: {
    ...mapMutations(["rc"]),
    ...mapActions(["incre"]),
  },
};
</script>
