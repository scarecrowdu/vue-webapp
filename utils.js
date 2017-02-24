var fs = require('fs');

//先清空上线文件夹下的文件
var deleteFolder = module.exports.deleteFolder = function(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function(file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
                console.log("clearing  [" + curPath + "]  folder");
            }
        });
        fs.rmdirSync(path);
    }
};

exports.folder = function(path) {

    var buildPath = path;
    var folder_exists = fs.existsSync(buildPath);

    if (folder_exists == true) {
        var dirList = fs.readdirSync(buildPath);
        dirList.forEach(function(fileName) {
            fs.unlinkSync(buildPath + fileName);
        });

        console.log("clearing  [" + buildPath + "]  folder");

    } else {
        console.log("Folder does not exist or Removal of failure");
    }
}

var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.loaders = function() {

    var SOURCE_MAP = true
    SOURCE_MAP ? 'source-map' : false
        // generate loader string to be used with extract text plugin
    function generateExtractLoaders(loaders) {
        return loaders.map(function(loader) {
            return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
        }).join('!')
    }

    // http://vuejs.github.io/vue-loader/configurations/extract-css.html
    return {
        //http://vuejs.github.io/vue-loader/configurations/extract-css.html
        css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
        less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
        sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
        stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
    }
}