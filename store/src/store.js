import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
  },
  getters: {
    doubleState: (state) => state.count * 2,
  },
  mutations: {
    rc(state, number) {
      state.count += number;
    },
  },
  actions: {
    //incre(context, number) { {}　を使うことで使用するコンテキストだけ指定可能
    incre({ commit }, number) {
      commit("rc", number);
    },
  },
});
