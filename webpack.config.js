const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  inject: 'body',
  favicon: './public/favicon.ico'
});

module.exports = {
     entry: './src/index.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
     },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader'
                  }
                ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  mimetype: 'application/font-woff'
                }
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/octet-stream'
                }
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'svg-url-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/svg+xml'
                }
              },
              {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                query: {
                  limit: 8192
                }
              },
              {
                test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
              }
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
},
 plugins: [
     HtmlWebpackPluginConfig,
     new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })]
};
