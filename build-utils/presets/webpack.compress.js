const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = () => ({
  plugins: [
    new CompressionWebpackPlugin({
      deleteOriginalAssets: true
    })
  ]
});
