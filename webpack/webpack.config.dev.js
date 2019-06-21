const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const dev = require('../config/dev.js');
const config = require('../config');
const themeConfig = require('../src/theme');

process.env.NODE_ENV = "development";

module.exports = {
    entry: dev.entry,
    devtool: 'inline-source-map',
    devServer: {
        disableHostCheck: true,
        contentBase: './dist',
        hot: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: "errors-only",
        ...dev.devServer,
    },
    mode: 'development',
    output: {
        filename: 'public/js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            inject: false
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public/ueditor'),
            to: path.resolve(__dirname, '../dist/ueditor')
        }]),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src/')
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        [
                            'import',
                            {
                                libraryName: 'antd',
                                style: true
                            },
                            'ant'
                        ],
                        [
                            'import',
                            {
                                libraryName: 'antd-mobile',
                                style: 'css'
                            },
                            'ant-mobile'
                        ],
                        'transform-decorators-legacy'
                    ]
                },
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src/')
                ]
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local].[hash:8]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv()]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [postcssPresetEnv()]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: themeConfig
                        }
                    }
                ]
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'babel-loader'
                },
                {
                  loader: '@svgr/webpack',
                  options: {
                    babel: false,
                    icon: true
                  }
                }
              ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 500,
                        outputPath: 'public/images/',
                        name: '[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src'),
            components: path.resolve(__dirname, '../src/components'),
            utils: path.resolve(__dirname, '../src/utils'),
            services: path.resolve(__dirname, '../src/services'),
            models: path.resolve(__dirname, '../src/models')
        }
    }
};
