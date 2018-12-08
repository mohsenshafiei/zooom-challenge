const path = require('path');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const options = {
  contentBase: path.resolve(__dirname, '../dist'),
  hot: true,
  host: 'localhost',
  open: true,
  historyApiFallback: true,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(process.env.DEV_PORT, 'localhost', () => {
  console.log(`Dev Server Listening at Port: ${process.env.DEV_PORT}`);
});
