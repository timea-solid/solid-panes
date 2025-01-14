const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  mode: 'development',
  entry: './dev/loader.ts',
  plugins: [
    new HtmlWebpackPlugin({ template: './dev/index.html' })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts'],
    fallback: { "path": false }
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    fs: 'null',
    'node-fetch': 'fetch',
    'isomorphic-fetch': 'fetch',
    xmldom: 'window',
    'text-encoding': 'TextEncoder',
    'whatwg-url': 'window',
    '@trust/webcrypto': 'crypto'
  },
  devServer: {
    static: './dist',
    compress: true,
    port: 9000
  },
  devtool: 'source-map'
}]
