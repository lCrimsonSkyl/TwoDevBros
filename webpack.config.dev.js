const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const devConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    devServer: {
        stats: {
            children: false, // Hide children information
            maxModules: 0, // Set the maximum number of modules to be shown
        },
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0', //your ip address
        port: 8081, // Specify a port number to listen for requests
        historyApiFallback: true,
        disableHostCheck: true,
    },
    devtool: 'eval-source-map',
    plugins: [
        new MiniCssExtract({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ],
};

module.exports = merge(baseConfig, devConfig);