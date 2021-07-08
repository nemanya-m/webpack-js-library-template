const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports ={
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', './dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-transform-spread"
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dragg&Drop',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      // overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
      // context: path.resolve(__dirname, '../src/js'),
      files: '**/*.js' // files is relative a context
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
  }
}
