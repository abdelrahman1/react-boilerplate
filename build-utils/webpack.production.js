const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = () => ({
  devtool: "(none)",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:64:5]",
              minimize: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () =>
                autoprefixer({
                  browsers: ["> 1%", "last 2 version"]
                })
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
