const path = require("path");

module.exports = {
  mode: "development",

  entry: "index.html", // arquivo inicial

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "source-map",
};