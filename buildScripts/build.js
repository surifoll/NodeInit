const webpack= require("webpack");
const webpackConfig = require("../webpack.config.prod");
const chalk = require("chalk");

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment'));


webpack(webpackConfig).run((err, stats)=>{
    if (err) {
        console.log(chalk.red(err));
        return 1;
    } else {
        return 0;
    }
})