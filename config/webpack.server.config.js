const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const baseConfig = require('./webpack.base.config');
const routes = require('../src/client/routes').routes.map((route) => route.path);

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
            new Dotenv(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': `'${env.NODE_ENV}'`
                },
                PLATFORM: JSON.stringify('server')
            }),
            new ExtractTextPlugin({
                filename: 'bundle.css',
                allChunks: true
            }),
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, '..', 'public'),
                routes,
            })
        ],
    }
};