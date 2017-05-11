const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: 'popup.css',
	disable: process.env.NODE_ENV === 'development'
});

var _module = {
	rules: [{
		test: /\.scss$/,
		use: extractSass.extract({
			use: [{
				loader: 'css-loader' // translates CSS into CommonJS
			}, {
				loader: 'sass-loader' // compiles Sass to CSS
			}],
			fallback: 'style-loader'
		})
	}],
	loaders: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}
	]
};

var _plugins = [
	extractSass
];


module.exports = [
	{
		entry: './src/popup.scss',
		output: {
			path: '.',
			filename: 'popup.css.js'
		},
		module: _module,
		plugins: _plugins
	}
];

for (var script of ['predictit', 'options', 'popup', 'background']) {
	module.exports.push({
		entry: './src/' + script + '.js',
		output: {
			path: '.',
			filename: script + '.js'
		},
		module: _module,
		plugins: _plugins
	});
}

/*
	{
		entry: './src/predictit.js',
		output: {
			path: '.',
			filename: 'predictit.js'
		},
		module: _module,
		plugins: _plugins
	},
	{
		entry: './src/options.js',
		output: {
			path: '.',
			filename: 'options.js'
		},
		module: _module,
		plugins: _plugins
	},
	{
		entry: './src/popup.js',
		output: {
			path: '.',
			filename: 'popup.js'
		},
		module: _module,
		plugins: _plugins
	},
	{
		entry: './src/background.js',
		output: {
			path: '.',
			filename: 'background.js'
		},
		module: _module,
		plugins: _plugins
	}
];
*/
