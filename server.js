var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port);
console.log('The magic happens on port ' + port);