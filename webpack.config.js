const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { NODE_ENV: env = '' } = process.env

module.exports = [
  {
    entry: { server: './index.js' },
    output: {
      path: resolve(__dirname, 'bin'),
      filename: '[name].js'
    },
    target: 'node',
    mode: env || 'development',
    devtool: env.match(/^prod(?:uction)?$/) ? 'source-map' : 'eval',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['css-loader']
        }
      ]
    }
  },
  {
    entry: { app: './routes/Main.js' },
    output: {
      path: resolve(__dirname, 'public'),
      filename: '[name].js'
    },
    mode: env || 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
]
