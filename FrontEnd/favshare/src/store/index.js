import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";

import search from "./modules/search";
import home from "./modules/home";
import profile from "./modules/profile";
import account from "./modules/account";
import myvideo from "./modules/myvideo";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    home,
    profile,
    account,
    myvideo,
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage,
    }),
  ],
});
