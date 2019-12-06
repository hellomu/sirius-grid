"use strict"
const webpack = require("webpack")
const merge = require("webpack-merge")
const path = require("path")
const baseWebpackConfig = require("./webpack.base.conf")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")

module.exports = merge(baseWebpackConfig, {
	devtool: "eval-source-map",
	entry: {
		main: "./examples/main",
		vendors: ["vue", "vue-router"]
	},
	output: {
		path: path.join(__dirname, "../examples/dist"),
		publicPath: "",
		filename: "[name].js",
		chunkFilename: "[name].chunk.js"
	},
	resolve: {
		alias: {
			"sirius-grid": "../../src/index",
			styles: "../src/styles",
			vue: "vue/dist/vue.esm.js"
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendors",
			filename: "vendor.bundle.js"
		}),
		new HtmlWebpackPlugin({
			inject: true,
			filename: path.join(__dirname, "../examples/dist/index.html"),
			template: path.join(__dirname, "../examples/index.html")
		}),
		new FriendlyErrorsPlugin()
	]
})
