<template>
  <div id="app">
    <h3>投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input type="text" id="name" v-model="name" />
    <br />
    <label for="comment">コメント:</label>
    <textarea id="comment" v-model="comment"></textarea>
    <button @click="post">POST</button>
    <h2>掲示板</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    post() {
      axios
        .post(`${process.env.VUE_APP_FIRESTORE_URL}`, {
          fields: {
            name: {
              stringValue: this.name,
            },
            comment: {
              stringValue: this.comment,
            },
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
          console.log(process.env.VUE_APP_FIRESTORE_URL);
        });
      [this.name, this.comment] = "";
    },
  },
};
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
