const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { Server } = require("http");

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "src/server/server.js"),
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
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
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDev ? "source-map" : "",
};
