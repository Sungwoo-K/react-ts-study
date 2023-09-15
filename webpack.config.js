const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2020", // 지원하는 ECMAScript 버전 설정
        },
      },
    ],
  },
  output: {
    filename: "js/[name]-[chunkhash].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
  ],
  devServer: {
    static: "./assets",
  },
};
