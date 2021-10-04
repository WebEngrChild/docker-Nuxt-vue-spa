module.exports = {
  /*
  ** ブラウザアクセス用にポート番号を指定
  */
 server: {
  port: 2000,
  host: '0.0.0.0'
  },

   /*
   ** Nuxt.js modules、boostrap追加
   */
   modules:
   [
       "@nuxtjs/axios",
       'bootstrap-vue/nuxt',
   ],

   axios: {
    proxy: true,
    baseURL: 'http://host.docker.internal:90/api/',
  },

  proxy: {
    '/api/': {
      target: 'http://host.docker.internal:90',
    },
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'my_nuxt_app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** これは自動的に、`~/components` からコンポーネントを読み込みます
  */
  components: true
}

