var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//分离CSS和JS文件
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');//自动打开浏览器，和页面热加载冲突


var ROOT_PATH = path.resolve(__dirname);//__dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    chunkFilename: "bundle-[id].js"
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,//不跳转
    hot: true,
    inline: true,//实时刷新
    progress: true,
    colors: true,//终端中输出结果为彩色
    port:3001
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/, 
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My(tianzheng) first react app '
    }),
    new webpack.optimize.OccurenceOrderPlugin(),//通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.UglifyJsPlugin(),//压缩JS代码
    //new ExtractTextPlugin("[name]-[hash].css")
    //new OpenBrowserPlugin({ url: 'http://localhost:3001' })
  ]
}