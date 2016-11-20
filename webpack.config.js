
const path = require('path')
const webpack = require('webpack')
const StaticSite = require('static-site-generator-webpack-plugin')

const paths = [
  '/',
  '/ui'
]

module.exports = {
  entry: {
    main: './demo/entry.js'
  },

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
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
    new StaticSite('main', paths, {})
  ],

  devServer: {
    contentBase: 'demo/'
  }
}

