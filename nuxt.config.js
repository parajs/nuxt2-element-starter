export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-element-starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/style/theme/index.css', '@/style/global.css'],

  router: {
    middleware: ['user-agent'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '@/plugins/store', '@/plugins/axios'],

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
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
  ],
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
        code: 'tw-CN',
        name: '繁體中文',
        iso: 'tw-CN',
        file: 'tw-CN.js',
      },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'zh-CN',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxy: true,
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: "https://api.nuxtjs.dev/api",
  // },
  proxy: {
    '/api/': 'http://www.kuggamax2.paradeum.com:8010',
    '/static/': 'http://www.kuggamax2.paradeum.com:8010',
  },
  publicRuntimeConfig: {
    axios: {
      proxy: true,
      // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
      // 定义用于发出客户端请求的基本 URL,生产环境中浏览器可见
      browserBaseURL: '/api/v1',
    },
    cookie: {
      path: '/',
      maxAge: 1000 * 60 * 60 * 10,
    },
  },
  privateRuntimeConfig: {
    axios: {
      // 定义用于发出服务器端请求的基本 URL,生产环境中浏览器不可见，服务端可见
      baseURL: 'http://www.kuggamax2.paradeum.com:8010/api/v1',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    analyze: true,
    transpile: [/^element-ui/],
  },
}
