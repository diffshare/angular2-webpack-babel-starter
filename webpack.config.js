var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {

    entry: {
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'main': './src/main.ts'
    },

    devtool: 'source-map',
    debug: true,

    output: {
        path: './dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
        chuckFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.sass', '.html']
    },

    module: {
        preLoaders: [
            {test: /\.js$/, loader: "source-map-loader", exclude: [/rxjs/]}
        ],
        loaders: [
            {test: /\.ts$/, loader: 'awesome-typescript-loader'},

            {test: /\.html$/, loader: 'raw-loader'},

            {test: /\.(slim|slm)$/, loader: 'html!slm'},

            {test: /\.sass$/, loader: 'style!css!sass'}
        ]
    },

    sassLoader: {
        indentedSyntax: true
    },

    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        //new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.slim',
            chunksSortMode: 'dependency'
        })
    ],

    node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
};
