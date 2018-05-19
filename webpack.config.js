const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const loadConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) =>
  webpackMerge(
    {
      mode,
      entry: path.join(__dirname, "./src/index.js"),
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js$/,
            use: [
              {
                loader: "eslint-loader",
                options: {
                  fix: true,
                  emitError: true
                }
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader"
              }
            ],
            exclude: /node_modules/
          },
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(["dist"]),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/index.html")
        })
      ]
    },
    loadConfig(mode)
  );
