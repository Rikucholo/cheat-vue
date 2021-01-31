<template>
  <div>
  <button @click="inc()">＋＋</button>
  <router-link to="/">home</router-link>
  </div>
</template>
<script>
export default {
  name: "inc",
  methods: {
    inc() {
      this.$store.state.count++;
    },
  },
};
</script>
