const path = require('path');

module.exports = {
  ignore: [/node_modules\/(?!react-native)/],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'espower',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    'inline-react-svg',
    ['styled-components'],
    [
      'module-resolver',
      {
        cwd: path.resolve(__dirname),
        alias: {
          server: './src',
          app: '@r3l/app/lib',
          'react-native-svg$': 'react-native-web-svg',
          '^react-native$': 'react-native-web',
          'react-native-linear-gradient$': 'react-native-web-linear-gradient'
        }
      }
    ],
    '@loadable/babel-plugin'
  ]
};
