const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "index.html" }],
    }),
  ],
  experiments: {
    asyncWebAssembly: true, // 或者 syncWebAssembly: true
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: "webassembly/async", // 或者 "webassembly/sync"
      },
    ],
  },
};
