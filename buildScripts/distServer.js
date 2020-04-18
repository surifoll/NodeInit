var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');

 
const port = 3000;

var app = express();

app.use(compression());
app.use(express.static('dist'));
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
}); 

app.get('/books', (req, res) => {
    res.json([{ id: 1, name: 'Suraj', age: 10 },
    { id: 1, name: 'wwww', age: 10 },
    { id: 1, name: 'ffff', age: 10 }]);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
})
