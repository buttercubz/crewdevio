const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      'Components': path.resolve(__dirname, 'src/components/'),
      'Pages': path.resolve(__dirname, 'src/pages/'),
      'Utilities': path.resolve(__dirname, 'src/utilities/'),
      'StaticData': path.resolve(__dirname, 'src/staticData'),
      'Images': path.resolve(__dirname,'src/images')
    }
  },
  plugins: [htmlPlugin],
  devServer: {
    historyApiFallback: true
  }
};
