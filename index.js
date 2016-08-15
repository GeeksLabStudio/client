var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/dist'));

var compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
}));

app.use(webpackHotMiddleware(compiler));


app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function onStart(err) {
  if (err)
    console.error(err);
  else
    console.info('Starting dev server on port %s.', port);
});