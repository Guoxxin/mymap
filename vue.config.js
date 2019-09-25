// vue.config.js
const webpack = require('webpack')

module.exports = {
  publicPath:'/',
  outputDir: process.env.outputDir,
  lintOnSave: false,
  configureWebpack: {
    plugins: [

    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088/', // 对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
