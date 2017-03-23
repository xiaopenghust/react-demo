const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/components');
const DATA_DIR = path.resolve(__dirname, 'data');


const config = {
    entry: APP_DIR + '/App.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: [
                    'babel'
                ],
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader!sass-loader'
            },
            {
                test: /\.html/,
                loader:'html-loader'
            },
            {
                test: /\.(json)([\?]?.*)$/,
                include: DATA_DIR,
                loader: "file-loader",
                query:{
                    name:"data/[name].[ext]"
                }
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader",
                query:{
                    name:"asserts/fonts/[name].[ext]"
                }
            },
            {
                test: /\.(gif|png|jpg)$/,
                include: DATA_DIR,
                loader: "file-loader",
                query:{
                    name:"data/images/[name].[ext]"
                }
            }
        ]
    },
    postcss:[
        require('autoprefixer')({
            broswers:['last 5 versions']
        })
    ],
    devtool:'eval-source-map',
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        proxy:{
            '/api/*':{
                target:'http://localhost:8081',
                secure:false
            }
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title:'this is a title',    //一个title 属性
            inject:'body'
        })
    ]
};

module.exports = config;
