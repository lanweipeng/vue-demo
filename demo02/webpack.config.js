const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/main.js',//入口
  output: {//出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.min.js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader'] }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
  },
  plugins:[new VueLoaderPlugin()]
}