var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(__dirname, 'src/assets')

module.exports = {
    devtool: '#eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true&timeout=20000&noInfo=false&quiet=false',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            app : path.join(__dirname, 'config')
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
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
            // loader: 'style!css?minimize=false!less?{"includePath":"' + assetsPath +'"}',
            loaders: [
                'style-loader',
                'css-loader?minimize=false',
                `less-loader?sourceMan&paths[]=${assetsPath}`
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=30000&minetype=application/font-woff'
        }, {
            test: /\.svg$/,
            loader: 'svg-inline'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=10000&mimetype=image/png"
        }]
    }
};
