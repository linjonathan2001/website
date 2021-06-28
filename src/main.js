import Vue from "vue";
import Meta from "vue-meta";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

Vue.use(Meta);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
