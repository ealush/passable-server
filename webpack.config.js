const path = require('path'),
    globEntries = require('webpack-glob-entries'),
    AssetsPlugin = require('assets-webpack-plugin'),
    webpack = require('webpack');


module.exports = {
    externals: {
        'passable': 'passable'
    },
    target: 'node',
    entry: globEntries('./passes/**/*pass.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]-[chunkhash].js',
        library: ['passes', '[name]'],
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /(node_modules)/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new AssetsPlugin({filename: 'build/assets.json'})
    ]
};