const path =  require('path');

module.exports = {
     
    devtool:'inline-source-map',
   
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[],
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