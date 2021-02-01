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
    incre({ commit }, number) {
      commit("rc", number);
    },
  },
});
