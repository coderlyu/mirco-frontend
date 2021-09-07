const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')

const cwd = process.cwd()

const prodConf = {
  mode:'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(function(rate, t, ...msg) {
      console.log(`${Math.ceil(rate * 100)}% ${msg.toString()}`)
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css'
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.js'
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  },
}

module.exports = merge(baseConf, prodConf)