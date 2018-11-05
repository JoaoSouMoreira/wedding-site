const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = env => {
    return {
        ...baseConfig,
        name: 'server',
        entry: './src/server.js',
        output: {
            path: path.resolve(__dirname, '..', 'public'),
            filename: 'server.js',
            publicPath: '/',
        },
        target: 'node',
        externals: [nodeExternals()],
        plugins: [
            new webpack.DefinePlugin({
                NODE_ENV: `'${env.NODE_ENV}'`,
                PLATFORM: JSON.stringify('server')
            }),
            new ExtractTextPlugin({
                filename: 'bundle.css',
                allChunks: true
            })
        ],
    }
};