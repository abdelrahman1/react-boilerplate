const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const loadConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = ({ mode } = { mode: "production" }) =>
  webpackMerge(
    {
      mode,
      entry: path.join(__dirname, "./src/index.js"),
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  babelrc: false,
                  presets: [["env", { modules: false }], "react", "stage-2"],
                  plugins: ["transform-regenerator", "transform-runtime"]
                }
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
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/index.html"),
          minify: {
            minifyURLs: true,
            removeComments: true,
            removeEmptyElements: true,
            useShortDoctype: true,
            caseSensitive: true
          }
        })
      ]
    },
    loadConfig(mode)
  );
