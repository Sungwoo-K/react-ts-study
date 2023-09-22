const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": [path.resolve(__dirname, "src")],
    },
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
      {
        test: /\.(gif|jpg|png|webp|svg|mp4)$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "js/[name]-[chunkhash].js",
    assetModuleFilename: "asset/[hash][ext][query]",
    path: path.resolve(__dirname, "dirt"),
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
    historyApiFallback: true,
    static: "./dirt",
    open: true,
  },
};
