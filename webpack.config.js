const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: APP_DIR + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('styles.css'),
		new CopyWebpackPlugin([
			{ from: 'assets', to: 'assets' }
		])
	],
	externals: {
		'Config': JSON.stringify(require('./config.json'))
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.(jpg|gif|png|svg|)$/,
				loader: 'file-loader?name=[path][name].[ext]&context=./assets'
			}
    ]
  }
}
