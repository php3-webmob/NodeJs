var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};