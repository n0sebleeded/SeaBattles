const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'dist', 'boardValues'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            new webpack.ProgressPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: './public/app.css', // Путь к вашему CSS файлу
                        to: './', // Путь для копирования в папку build
                    },
                    {
                        from: './public/dot.svg', // Путь к вашему CSS файлу
                        to: './', // Путь для копирования в папку build
                    },
                ],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
}