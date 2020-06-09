/** @format */

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/backend' : '/',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/mockApi': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        pathRewrite: {
          '^/mockApi': ''
        },
        logLevel: 'debug'
      }
    }
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/partials/_reset.scss";`
      }
    }
  }
}
