require('newrelic');
var express = require('express');
var app = express();
var path = require('path');
var errorHandler = require('errorhandler');
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

if ('development' === app.get('env')) {
  app.use(errorHandler());
  app.use(express.static(__dirname + '/app'));
  app.use(express.static(__dirname + '/.tmp'));
}

if ('production' === app.get('env')) {
  app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect('https://' + req.headers.host + req.url);
    } else {
      next(); /* Continue to other routes if we're not redirecting */
    }
  });

  app.use(express.static(__dirname + '/dist'));
}

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port);
console.log('The magic happens on port ' + port);