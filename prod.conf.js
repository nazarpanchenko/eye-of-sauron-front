const { merge } = require('webpack-merge');
const common = require('./common.conf.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

const config = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new StatsPlugin('stats.json', {
            chunksSort: 'size',
            modulesSort: 'size',
            logging: true
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],

                [
                  "svgo",
                  {
                    plugins: extendDefaultPlugins([
                      {
                        name: "removeViewBox",
                        active: false
                      }
                    ])
                  }
                ]

              ]
            }
        })
    ],

    mode: 'production',
    profile: true,
    parallelism: 1,
    performance: {
        maxAssetSize: 5120000,
        maxEntrypointSize: 1024000
    }
};

module.exports = merge(common, config);
