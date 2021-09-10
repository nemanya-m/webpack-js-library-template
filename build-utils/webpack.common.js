const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
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
        test: /\.js$/,
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
      {
        // If you need to include other file extensions for images, make sure to include them here as well
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack static site builder',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new StylelintPlugin({
      // configFile: '../.stylelintrc',
      configFile: path.resolve(__dirname, '..', '.stylelintrc'),
      context: 'src',
      failOnError: false,
      quiet: false,
      emitErrors: true, // by default this is to true to check the CSS lint errors
      files: path.join('src', '**/*.s?(a|c)ss'),
      fix: true,

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
