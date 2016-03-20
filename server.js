var express = require('express');
var morgan = require('morgan')
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');

var path = require('path');

var app = express();

var port = 8000;

var publicDir = path.join(__dirname, 'public');

app.use(morgan('combined'))

var webpackCompiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(webpackCompiler, {
  reload: true
}))

app.use(express.static(publicDir));

app.get('/api/foo', function(req, res){
  res.send({
    entries: [
      {
        name: 'Entry A',
        description: 'This is a very nice entry'
      },
      {
        name: 'Entry B',
        description: 'This is a very nice entry'
      },
      {
        name: 'Entry C',
        description: 'This is a very nice entry'
      }
    ]
  });
});

app.get('/api/*', function(req, res){
  res.send(500);
});

// catch-all, send index.html, angular app will handle the rest...
app.use(function(req, res){
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, function(){
  console.log('listening on localhost:' + port);
});