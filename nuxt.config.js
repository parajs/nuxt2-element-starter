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
<<<<<<< HEAD
    title: "DukeForum",
=======
    title: 'nuxt-element-starter',
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
<<<<<<< HEAD
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover" },
      { hid: "keyword", name: "keyword", content: "DukeForum,dukeforum,forum,duke,Anonymous forum" },
      { hid: "description", name: "description", content: "Dukefoum anonymous forum, where you can post topics and discuss and interact with forum members." },
      { name: "format-detection", content: "telephone=no" },
=======
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/style/theme/index.css', '@/style/global.css'],

<<<<<<< HEAD
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
=======
  router: {
    middleware: ['user-agent'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/store',
    '@/plugins/dayjs',
    '@/plugins/axios',
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
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
<<<<<<< HEAD
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "cookie-universal-nuxt",
    "@nuxtjs/dayjs",
    "@nuxtjs/i18n",
    "nuxt-user-agent",
=======
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
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
<<<<<<< HEAD
        code: "zh-TW",
        name: "繁體中文",
        iso: "zh-TW",
        file: "zh-TW.js",
=======
        code: 'tw-CN',
        name: '繁體中文',
        iso: 'tw-CN',
        file: 'tw-CN.js',
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'zh-CN',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
<<<<<<< HEAD
  axios: {
    proxy: true,
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    prefix: "/api/v1",
=======
  // axios: {
  //   proxy: true,
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: "https://api.nuxtjs.dev/api",
  // },
  proxy: {
    '/api/': 'http://www.kuggamax2.paradeum.com:8020',
    '/static/': 'http://www.kuggamax2.paradeum.com:8020',
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
  },
  proxy: {
    "/api/": BASE_URL,
    "/static/": BASE_URL,
  },
 
  publicRuntimeConfig: {
<<<<<<< HEAD
    BASE_URL,
=======
    axios: {
      proxy: true,
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      // 定义用于发出客户端请求的基本 URL,生产环境中浏览器可见
      browserBaseURL: '/api/v1',
    },
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
    cookie: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 10,
    },
  },
  privateRuntimeConfig: {
<<<<<<< HEAD

=======
    axios: {
      // 定义用于发出服务器端请求的基本 URL,生产环境中浏览器不可见，服务端可见
      baseURL: 'http://www.kuggamax2.paradeum.com:8010/api/v1',
    },
>>>>>>> 44b6bae17bb57bfa149b142d24db25cd15c24e05
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
