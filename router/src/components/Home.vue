<template>
  <div>
    <h3>HOME</h3>
    <button @click="toUser">btn</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    toUser() {
      this.$router.push({ path: "users" });
    },
  },
});
</script>
