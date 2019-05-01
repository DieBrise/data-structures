const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "data-structures.js"
	}
};