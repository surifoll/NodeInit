const path =  require('path');
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
     
    devtool:'source-map',
   
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[

        new htmlWebpackPlugin({
            template : 'src/index.html',
            inject: true
        }),
        //prevent duplicate
         new webpack.optimize.OccurrenceOrderPlugin(), 
        //minify js
       // new webpack.optimize.UglifyJsPlugin.Options(),
        
    ],
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
    },
    mode: 'development'
}