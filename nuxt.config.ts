// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Country Clothing UK | British Country Wear",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxtjs/device",
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  i18n: {
    // vueI18n: "~/utils/i18n.config.ts",
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "tr",
        iso: "tr-TR",
        name: "Turkish",
        file: "tr.json",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: "i18n_redirected",
    //   fallbackLocale: "en",
    //   redirectOn: "root",
    // },
  },
  image: {
    // baseUrl: process.env.IMAGE_BASE_URL,
    // dir: "public/images",
    format: ["avif", "webp", "jpeg", "png", "svg", "jpg", "gif"],
    quality: 100,
  },
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      pathPrefix: false,
    },
    {
      path: "~/components",
      extensions: [".vue"],
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
