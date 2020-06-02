const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/ts/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    plugins: [
       new CopyPlugin({
           patterns: [
               { from: './src/lib/wasm-exec-min.js' },
               { from: './src/go/lib.wasm' }
           ]
       }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/templates/index.html',
            appMountId: 'app',
            filename: 'index.html'
        })
    ]
}