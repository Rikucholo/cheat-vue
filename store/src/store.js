import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    message: "intital message",
  },
  getters: {
    doubleState: (state) => state.count * 2,
    message: (state) => state.message,
  },
  mutations: {
    rc(state, number) {
      state.count += number;
    },
    updateMessage(state, value) {
      state.message = value;
    },
  },
  actions: {
    incre({ commit }, number) {
      commit("rc", number);
    },
    updateMessage({ commit }, value) {
      commit("updateMessage", value);
    },
  },
});
