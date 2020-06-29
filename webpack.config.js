const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  mode: true ? "production" : "development",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
};
