import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import ru from "vuetify/es5/locale/ru";
import en from "vuetify/es5/locale/en";
import { i18n } from "@/locale/i18n";

Vue.use(Vuetify, {
  lang: {
    locales: { en, ru },
    current: "en"
  },
  theme: {
    primary: "#1976D2",
    secondary: "#42A5F5",
    accent: "#E91E63"
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
