<template>
  <v-menu offset-y>
    <v-btn slot="activator" flat>
      <v-img :src="currentLocaleIcon" height="26px" contain></v-img>
    </v-btn>

    <v-list>
      <v-list-tile
        v-for="locale in locales"
        :key="locale.code"
        @click="changeLocale(locale.code)"
      >
        <v-list-tile-action>
        <v-img :src="locale.icon" height="26px" contain></v-img>
        </v-list-tile-action>
        <v-list-tile-content>
        <v-list-tile-title>{{ locale.name }}</v-list-tile-title>
        </v-list-tile-content>  
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import { locales } from "@/locale/i18n";

export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
      this.$router.push(`/${locale}`);
    }
  },
  computed: {
    currentLocaleIcon() {
      const currentLocale = this.$i18n.locale;
      const locale = locales.find(loc => loc.code === currentLocale);
      return locale.icon;
    }
  }
};
</script>
