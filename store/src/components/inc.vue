<template>
  <div>
    <button @click="incli()">＋＋</button>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
export default {
  name: "inc",
  methods: {
    incli() {
      this.$store.commit("ic", 2);
    },
  },
};
</script>
