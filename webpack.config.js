
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './demo/entry.js',

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'axs': path.join(__dirname, './src'),
      'axs-ui': path.join(__dirname, './packages/axs-ui/src')
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'demo/template.ejs'
    })
  ],

  devServer: {
    contentBase: 'demo/'
  }
}

