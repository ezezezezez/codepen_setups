module.exports = {
  entry: {
    index: './src/index.js',
    vendor: './src/vendor.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contentHash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
