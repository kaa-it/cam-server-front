import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/locale/translations/en";
import ru from "@/locale/translations/ru";

export const defaultLocale = "en";

export const locales = [
  {
    code: "en",
    name: "English",
    icon: "static/images/us.png"
  },
  {
    code: "ru",
    name: "Русский",
    icon: "static/images/ru.png"
  }
];

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: { en, ru }
});
