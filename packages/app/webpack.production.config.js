const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const prodConfig = {};
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';
const CompressionPlugin = require('compression-webpack-plugin');
const devConfig = require('./webpack.config');

Object.keys(devConfig).forEach(key => {
  prodConfig[key] = devConfig[key];
});

// delete prodConfig.devtool;

prodConfig.entry = {
  app: ['./src/index.js', 'whatwg-fetch']
};

prodConfig.plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify('production'),
      WEB: JSON.stringify('true'),
      BABEL_ENV: JSON.stringify('development_web'),
      VAPID_PUBLIC_KEY: JSON.stringify(process.env.VAPID_PUBLIC_KEY),
      INFURA_PROTOCOL: JSON.stringify(process.env.INFURA_PROTOCOL),
      INFURA_NETWORK: JSON.stringify(process.env.INFURA_NETWORK),
      INFURA_API_KEY: JSON.stringify(process.env.INFURA_API_KEY),
      NETWORK_NUMBER: JSON.stringify(process.env.NETWORK_NUMBER),
      TOKEN_ADDRESS: JSON.stringify(process.env.TOKEN_ADDRESS)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new LoadablePlugin(),
  new CompressionPlugin()
];

prodConfig.mode = 'production';

prodConfig.output = {
  path: path.join(__dirname, '/public/dist/'),
  filename: 'bundle.[contenthash].js',
  chunkFilename: '[name].bundle.[contenthash].js',
  publicPath: '/dist/'
};

prodConfig.optimization = {
  moduleIds: 'hashed',
  splitChunks: {
    chunks: 'all'
  }
};

prodConfig.module.rules = [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loader: 'image-webpack-loader',
    // Specify enforce: 'pre' to apply the loader
    // before url-loader/svg-url-loader
    // and not duplicate it in rules with them
    enforce: 'pre'
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|jpg|jpeg|gif)$/,
    loader: 'url-loader',
    include: [
      path.resolve(__dirname, 'public'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules/react-native-vector-icons')
    ],
    options: {
      name: 'public/img/[name].[ext]',
      esModule: false,
      limit: 0
    }
  },
  {
    test: /\.css$|\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
        // fallback: 'style-loader',
      },
      'css-loader',
      'postcss-loader'
      // use: 'css-loader!postcss-loader'
    ]
  },
  {
    test: /\.(js|svg)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          rootMode: 'upward',
          // This is a feature of `babel-loader` for Webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
      }
    ],
    exclude: /node_modules/,
    include: __dirname
  }
];

if (isAnalyze) {
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = prodConfig;
