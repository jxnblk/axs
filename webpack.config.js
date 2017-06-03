const path = require('path')

module.exports = {
  entry: './site/entry.js',

  output: {
    path: path.join(__dirname, 'site'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'axs': path.join(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'site/',
    historyApiFallback: {
      index: '/bundle'
    }
  }
}
