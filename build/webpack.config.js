// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
	    index: path.resolve(__dirname, '../src/app.js')
	},

    // 输出配置
    output: {
        // 输出路径是 webapp/static
        path: path.resolve(__dirname, '../static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            // 使用babel,编译ES6语法
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "css-loader?sourceMap!cssnext-loader"
            }, 
            {
                test: /\.scss$/,
                loader: "css-loader?sourceMap!sass-loader!cssnext-loader"
            },
            // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL 
            {
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../template.html',     //输出的 HTML 文件名
            template: path.resolve(__dirname, '../index.tpl'), //模板文件路径
            inject: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.vue']
    }
}