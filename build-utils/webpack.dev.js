module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          'sass-loader'
        ],
      },
    ]
  },
  devServer: {
    // If I want to serve app to be accessible over LAN netowrk
    // host: '0.0.0.0',
    open: true,
    // If I want to open specific page on startup
    // openPage: 'http://localhost:8080'
  }
};
