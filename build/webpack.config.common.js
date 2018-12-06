const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require('dotenv');

const ENV_VARS = dotenv.config({ path: path.resolve(__dirname, '../.env') }).parsed;
const envKeys = Object.keys(ENV_VARS).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(ENV_VARS[next]);
  return prev;
}, {});

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/app.tsx')],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2|jpeg|jpg|svg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:5]',
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: process.env.SITE_TITLE,
      filename: 'index.html',
      languageCode: 'fa-IR',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: process.env.SITE_DESCRIPTION,
      },
    }),
    new WebpackPwaManifest(
      Object.assign({}, require('./manifest.json'), { inject: true }),
    ),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
    alias: {
      styles: path.resolve(__dirname, '../src/styles'),
      ui: path.resolve(__dirname, '../src/ui'),
      assets: path.resolve(__dirname, '../src/assets'),
      services: path.resolve(__dirname, '../src/services'),
      store: path.resolve(__dirname, '../src/store'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
  },
  target: 'web',
};
