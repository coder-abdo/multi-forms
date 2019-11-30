const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "public", "index.html")
    })
  ]
};
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports = {
//   entry: path.join(__dirname, "src", "index.js"),
//   output: {
//     path: path.join(__dirname, "build"),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       },
//       {
//         test: /\.css$/,
//         use: ["css-loader", "style-loader", "postcss-loader"]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, "public", "index.html"),
//       filename: "index.html"
//     })
//   ]
// };
