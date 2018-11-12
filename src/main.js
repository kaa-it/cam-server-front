import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueI18n from "vue-i18n";

Vue.use(Vuetify);
Vue.use(VueI18n);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
