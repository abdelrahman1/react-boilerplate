const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
module.exports = mode => ({
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]",
              sourceMap: true
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    overlay: true
  }
});
