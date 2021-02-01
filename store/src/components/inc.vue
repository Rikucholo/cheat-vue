<template>
  <div>
    <button @click="ic(2)">＋＋</button>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
import {mapMutasions} from 'vuex';
export default {
  name: "inc",
  methods: {
    ...mapMutasions(["ic"]),
  },
};
</script>
