const path                  = require('path');
const express               = require('express');
const webpack               = require('webpack');
const webpackMiddleware     = require('webpack-dev-middleware');
const webpackHotMiddleware  = require('webpack-hot-middleware');
const historyApiFallback    = require('connect-history-api-fallback');
const config                = require('./webpack.config.js');
const httpProxy             = require('http-proxy');

const webServer = '127.0.0.1';
const apiPort   = 4000;
const port      = process.env.PORT || 3000;
const app       = express();
const compiler  = webpack(config);

app.use(historyApiFallback({
  verbose: false
}));

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  hot: true,
  quiet: false,
  noInfo: false,
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

var proxy = httpProxy.createProxyServer({
  target: {
    host: webServer,
    port: apiPort
  }
});

app.all('/auth/*', function (req, res) {
  proxy.web(req, res);
});

app.all('/api/*', function (req, res) {
  proxy.web(req, res);
});

app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function onStart(err) {
  if (err)
    console.error(err);
  else
    console.info('Starting dev server on port %s.', port);
});

proxy.on('error', function(e) {
  console.log('proxy error' + e);
});