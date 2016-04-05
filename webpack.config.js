//先清空 n-build 文件夹下的文件
var fs = require('fs'),
    buildPath='./dist/';
var folder_exists = fs.existsSync(buildPath);

if(folder_exists == true){
   var dirList = fs.readdirSync(buildPath);
   dirList.forEach(function(fileName)
   {
       fs.unlinkSync(buildPath + fileName);
   });
   console.log("clearing " + buildPath);
};




var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成带hash的HTML 文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");   //独立样式文件

module.exports = {

    //入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的app.js文件
    entry: path.resolve(__dirname, './src/app.js'),

    // 输出配置
    output: {
        // 输出路径是
        path: path.join(__dirname, '/dist'),
        publicPath: 'dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },

    // 添加的module属性
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
                // exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            }, {
                test: /\.css$/,
                // loader: "css-loader?sourceMap!cssnext-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")
            }, {
                test: /\.scss$/,
                // loader: "css-loader?sourceMap!sass-loader!cssnext-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader!cssnext-loader")
            }, {
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            }, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
        ]
    },

    // vue: {
    //     loaders: {
    //         /*js: 'babel!eslint',*/
    //         less: 'vue-style!css!less',
    //         sass: 'vue-style!css!sass'
    //     }
    // },

    // 插件项
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        /*
        版本控制
        模块是把生成的带有md5戳的文件，插入到index.html中。
        通过index.tpl模板，最后在根目录下生成一个index.html
       */
        new HtmlWebpackPlugin({
            title: 'My VueDemo',
            filename: '../index.html', //会生成d.html在根目录下,并注入脚本
            template: path.resolve(__dirname, './index.tpl'),
            inject: true //此参数必须加上，不加不注入
        }),

        //会将所有的样式文件打包成一个单独的style.css
        new ExtractTextPlugin("style.[hash].css" , {
           disable: false,
           allChunks: true  //所有独立样式打包成一个css文件
        }),

    ],

    stats: {
        // Nice colored output
        colors: true
    },

    // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名,require('file') 代替 require('file.coffee')
    resolve: {
        extensions: ['', '.js', '.vue', '.coffee']
    },

    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
