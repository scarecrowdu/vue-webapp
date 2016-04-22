var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'webapp/index.html',
        template: path.resolve(__dirname, '../index.tpl'), //模板文件路径
        inject: true
    })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = 'webpack-hot-middleware/client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;