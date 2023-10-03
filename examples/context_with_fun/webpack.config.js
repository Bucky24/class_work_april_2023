var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[require.resolve('@babel/preset-env'), {
								exclude: ["transform-regenerator"],
							}],
							'@babel/preset-react'
						],
						plugins: ["@babel/plugin-proposal-class-properties"]
					},
				},
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: "[path][name]__[local]--[hash:base64:5]",
					},
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: {
					loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
					options: {
						loader: 'image-webpack-loader',
						options: {
							optipng: {
								optimizationLevel: 4,
							}
						}
					}
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.tmpl.html')
		})
	]
};
