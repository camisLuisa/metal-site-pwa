const webpack = require('webpack');

module.exports = {
	entry: './src/SitePwa.js',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-es2015'],
					plugins: ['babel-plugin-transform-node-env-inline']
				}
			}
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './static/site-pwa.js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
