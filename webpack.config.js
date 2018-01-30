const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
module.exports = {
    entry: [
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
                    {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './src'
    },
    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
  };