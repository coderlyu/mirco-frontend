const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')

const cwd = process.cwd()

const devConf = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    port: 3000,
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = merge(baseConf, devConf)