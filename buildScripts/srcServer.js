var express = require('express');
var path = require('path');
var open = require('open');

var webpack = require('webpack');
const config =  require('../webpack.config.dev');


const compiler = webpack(config);
const port = 3000;

var app = express();


app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) =>{
    if (err) {
        console.log(err);
    }else{
        open('http://localhost:'+ port)
    }
})
