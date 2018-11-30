const webpack = require('webpack');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],
});
