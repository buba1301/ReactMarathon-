const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { NODE_ENV } = process.env;

module.exports = {
  target: "node",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  mode: NODE_ENV || "development",
  entry: path.resolve(__dirname, "src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
        // exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "css-modules-typescript-loader?modules",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]__[hash:base64:5]",
                auto: /\.module\.\w+$/i,
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ["url-loader"],
      },
    ],
  },
};