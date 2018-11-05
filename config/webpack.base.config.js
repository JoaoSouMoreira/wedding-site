const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
                query: {
                    presets: ['react'],
                    plugins: ['babel-plugin-transform-class-properties']
                }
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader'
            },
        ]
    }
};