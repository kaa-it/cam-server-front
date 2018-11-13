export default {
  methods: {
    uri(link) {
      const locale = this.$route.params.locale;

      if (link === "/") return `/${locale}`;

      // we strip leading and trailing slashes and prefix
      // the current locale
      return `/${locale}/${link.replace(/^\/|\/$/g, "")}`;
    }
  }
};
