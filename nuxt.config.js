export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
        mobileAppIOS: true
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Orbitron:500&display=swap&text=1234567890-'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  router: {
    middleware: 'i18n'
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/app.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    ['@nuxtjs/google-analytics', { id: 'UA-151898084-1' }]
  ],
  pwa: {
    manifest: {
      name: 'Coffee Budget'
    },
    meta: {
      nativeUI: true,
      appleStatusBarStyle: 'black-translucent'
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    sassOptions: {
      fiber: false
    }
  }
}
