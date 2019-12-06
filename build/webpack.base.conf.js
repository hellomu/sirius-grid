"use strict";
const path = require("path");
const webpack = require("webpack");
const pka = require("../package.json");

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
	resolve: {
		extensions: [".js", ".vue"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
			"@": resolve("src")
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						css: [
							"vue-style-loader",
							{
								loader: "css-loader",
								options: {
									sourceMap: true
								}
							}
						],
						less: [
							"vue-style-loader",
							{
								loader: "css-loader",
								options: {
									sourceMap: true
								}
							},
							{
								loader: "less-loader",
								options: {
									sourceMap: true
								}
							}
						]
					},
					postLoaders: {
						html: "babel-loader?sourceMap"
					},
					sourceMap: true
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					sourceMap: true
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loaders: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "'autoprefixer-loader'"
					}
				]
			},
			{
				test: /\.less$/,
				loaders: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "less-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			"process.env.VERSION": `'${pka.version}'`
		})
	],
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty"
	}
};
