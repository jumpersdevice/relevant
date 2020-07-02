const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const env = require('dotenv');

env.config({ path: path.join(__dirname, '/.env') });
env.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'whatwg-fetch',
      'webpack-hot-middleware/client?quiet=true',
      path.resolve(__dirname, './src/index')
    ]
  },
  devServer: {
    clientLogLevel: 'none'
  },
  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        DEVTOOLS: JSON.stringify(true), // <-------- DISABLE redux-devtools HERE
        NODE_ENV: JSON.stringify('development'),
        WEB: JSON.stringify('true'),
        BABEL_ENV: JSON.stringify('development_web'),
        VAPID_PUBLIC_KEY: JSON.stringify(process.env.VAPID_PUBLIC_KEY),
        INFURA_PROTOCOL: JSON.stringify(process.env.INFURA_PROTOCOL),
        INFURA_NETWORK: JSON.stringify(process.env.INFURA_NETWORK),
        INFURA_API_KEY: JSON.stringify(process.env.INFURA_API_KEY),
        NETWORK_NUMBER: JSON.stringify(process.env.NETWORK_NUMBER),
        TOKEN_ADDRESS: JSON.stringify(process.env.TOKEN_ADDRESS),
        API_SERVER: JSON.stringify(process.env.API_SERVER)
      }
    }),
    new CompressionPlugin(),
    new LoadablePlugin({
      filename: 'loadable-stats-dev.json',
      writeToDisk: true
    })
  ],
  resolve: {
    // symlinks: false,
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
      'react-native$': 'react-native-web',
      'react-native-linear-gradient$': 'react-native-web-linear-gradient',
      'bn.js': path.resolve(__dirname, '../../node_modules/bn.js'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    exprContextRegExp: /$^/,
    exprContextCritical: false,
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(png|woff|woff2|eot|ttf|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        include: [
          path.resolve(__dirname, 'public'),
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-native-vector-icons')
        ],
        options: {
          name: 'images/[name]-[hash:8].[ext]',
          esModule: false,
          limit: 10 * 1024
        }
      },
      {
        test: /\.(js|svg|'json')$/,
        include: [
          path.resolve(__dirname, 'src/index.js'),
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cwd: path.resolve(__dirname),
              rootMode: 'upward'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
};
