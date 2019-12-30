const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpack = require('./webpack.base.conf')

const join = (dir) => path.join(__dirname, dir)
module.exports = merge(baseWebpack, {
  mode: 'development',
  devtool: 'cheap-source-map',
  // 开启开发环境热更新
  devServer: {
    open: true,
    hot: true,
    port: 3002,
    publicPath: '/',
    contentBase: join('../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join('../src/index.html')
    }),
    // 热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 在热加载时直接返回更新文件名，而不是文件的id。
    new webpack.NamedModulesPlugin()
  ]
})
