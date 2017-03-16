var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title:'this is a title',    //一个title 属性
            inject:'body'
        })
    ]
};

module.exports = config;
