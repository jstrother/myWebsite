const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './js/scripts.js',
	output: {
		path: `public/`,
		filename: 'scripts.js'
	},
	watch: true,
	devtool: 'source-map',
	module: {
		loaders: [{			
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: [
					'es2015'
				]
			}
		}]
	}
};