import "babel-polyfill";
import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");