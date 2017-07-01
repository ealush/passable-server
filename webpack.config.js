const path = require('path'),
    globEntries = require('webpack-glob-entries'),
    webpack = require('webpack');

module.exports = {
    externals: {
        'passable': 'passable'
    },
    target: 'node',
    entry: globEntries('./passes/**/*pass.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
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
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};