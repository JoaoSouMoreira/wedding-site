const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    return {
        entry: './src/server.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'server.js',
            publicPath: '/'
        },
        target: 'node',
        externals: nodeExternals(),
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': `'${env.NODE_ENV}'`
            }),
            new ExtractTextPlugin({
                filename: 'bundle.css',
                allChunks: true
            })
        ],
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                query: {
                                    localIdentName: '[hash:8]',
                                    modules: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: { presets: ['react'] }
                },
                {
                    test: /\.(ttf|eot|otf|svg|png)$/,
                    loader: 'file-loader'
                },
            ]
        }
    }
};