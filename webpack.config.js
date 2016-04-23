var webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
  module: {
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
                              )
    ],
  devserver: {
    contentBase: "./"
  }
};
