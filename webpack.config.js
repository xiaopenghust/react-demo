var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/components');


var config = {
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
                test: /\.(gif|png|jpe?g)$/i,
                loaders:[
                    'file-loader?name=assets/images/[name]-[hash:5].[ext]'
                ]
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader",
                query:{
                    name:"asserts/fonts/[name].[ext]"
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
