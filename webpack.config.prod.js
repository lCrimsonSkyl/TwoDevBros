const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
const baseConfig = require('./webpack.config.base.js');

const prodConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtract({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),

        new CompressionPlugin({
            compressionOptions: {
                numiterations: 15,
            },
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            },
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
    ],
};

module.exports = merge(baseConfig, prodConfig);