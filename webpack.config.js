const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const assetPath = require('path').join(__dirname, 'dist');

module.exports = {
  entry: {
    js: './index.js',
    css: './src/assets/stylesheets/main.scss',
  },
  output: {
    path: assetPath,
    filename: 'bundle.min.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules',
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    },
    {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
    }],
  },
  progress: true,
  cache: true,
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      include: /\.min\.js$/,
    }),
  ],
};
