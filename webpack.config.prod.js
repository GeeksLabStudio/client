var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index',
    vendor: ['react', 'react-dom', 'lodash']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles/app.css',{
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.app.js")
  ],
  resolve: {
    modulesDirectories: [
      "node_modules",
      "assets"
    ]
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ["es2015", "stage-0", "react"], compact: false }
    }, {
        test: /\.json?$/,
        loader: 'json'
    }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=30000&minetype=application/font-woff&name=fonts/[name].[ext]'
    }, {
        test: /\.svg$/,
        loader: 'svg-inline?name=images/[name].[ext]'
    }, {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]"
    }]
  }
};