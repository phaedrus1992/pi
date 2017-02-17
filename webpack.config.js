
var _module = {
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

module.exports = [
	{
		entry: './src/predictit.js',
		output: {
			path: '.',
			filename: 'predictit.js'
		},
		module: _module
	},
	{
		entry: './src/options.js',
		output: {
			path: '.',
			filename: 'options.js'
		},
		module: _module
	},
	{
		entry: './src/background.js',
		output: {
			path: '.',
			filename: 'background.js'
		},
		module: _module
	}
];
