const { merge } = require('webpack-merge');
const common = require('./common.conf.js');
const webpack = require('webpack');

const config = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            exclude: ['vendors']
        })
    ],
    mode: 'development',
    devtool: false,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        contentBase: 'src',
        historyApiFallback: true
    }
};

module.exports = merge(common, config);
