const path = require("path");

module.exports = {
  entry: "./src/Captcha.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "ReactCaptchafy",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
