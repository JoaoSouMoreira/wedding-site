const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const srcPath = path.resolve(__dirname, '..', 'src');
const publicPath = path.resolve(__dirname, '..', 'public');

module.exports = () => {
    return {
        ...baseConfig,
        entry: path.resolve(srcPath, 'client/index.js'),
        output: {
            path: publicPath,
            filename: 'bundle.js',
            publicPath: '/'
        },
        devServer: {
            contentBase: publicPath,
            publicPath: '/'
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                PLATFORM: JSON.stringify('client')
            }),
            new ExtractTextPlugin({
                filename: 'bundle.css',
                allChunks: true
            }),
            new CopyWebpackPlugin([
                {
                    from: path.resolve(srcPath, 'client/index.html'),
                    to: path.resolve(publicPath, 'index.html')
                }
            ]),
            new webpack.ProvidePlugin({
                "React": "react",
            }),
        ]
    }
};