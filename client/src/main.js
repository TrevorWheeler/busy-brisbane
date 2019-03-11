import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";

Vue.use(Vuetify);
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
