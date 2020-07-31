const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { index: './src/index.js', loader: './src/loader.js' },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Course',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpe?g|gif|ttf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
};
