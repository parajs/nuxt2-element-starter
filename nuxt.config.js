// 加载环境变量
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const BASE_URL = process.env.BASE_URL

export default {
  server: {
    port: 8040, // default: 3000
    host: "0.0.0.0", // default: localhost,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DukeForum",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover" },
      { hid: "keyword", name: "keyword", content: "DukeForum,dukeforum,forum,duke,Anonymous forum" },
      { hid: "description", name: "description", content: "Dukefoum anonymous forum, where you can post topics and discuss and interact with forum members." },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/style/theme/index.css', '@/style/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/dayjs",
    "@/plugins/store",
    "@/plugins/axios",
    {
      src: '@/plugins/disableScale',
      mode: 'client'
    },
    {
      src: '@/plugins/refreshToken',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "cookie-universal-nuxt",
    "@nuxtjs/dayjs",
    "@nuxtjs/i18n",
    "nuxt-user-agent",
  ],
  // Optional
  dayjs: {
    locales: ["en", "zh-cn", "zh-tw"],
    defaultLocale: "zh-cn",
    plugins: [
      "updateLocale",
      "relativeTime", // import 'dayjs/plugin/timezone'
    ], // Your Day.js plugin
  },
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
    },
    locales: [
      {
        code: 'en-US',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        iso: 'zh-CN',
        file: 'zh-CN.js',
      },
      {
        code: "zh-TW",
        name: "繁體中文",
        iso: "zh-TW",
        file: "zh-TW.js",
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'zh-CN',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    prefix: "/api/v1",
  },
  proxy: {
    "/api/": BASE_URL,
    "/static/": BASE_URL,
  },
 
  publicRuntimeConfig: {
    BASE_URL,
    cookie: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 10,
    },
  },
  privateRuntimeConfig: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev }) {
      if(!isDev){
        config.module.rules.push({
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
              {
                  loader: "remove-console-loader",
                  options: {
                      "exclude": [ "error", "warn"]
                  }
              }
          ],
        })
      }
    },
    postcss: null,
    transpile: [/^element-ui/],
  },
}
