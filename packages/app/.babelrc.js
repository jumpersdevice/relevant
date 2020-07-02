const path = require('path');

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: '>0.5%'
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'inline-react-svg',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-flow',
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        cwd: path.resolve(__dirname),
        alias: {
          app: './src',
          modules: './src/modules',
          core: './src/core',
          utils: './src/utils',
          public: './public',
          styles: './src/styles',
          'react-native-svg$': 'react-native-web-svg',
          '^react-native$': 'react-native-web',
          'react-native-linear-gradient$': 'react-native-web-linear-gradient',
          'react-native-gesture-handler/DrawerLayout':
            './app/modules/ui/mobile/DrawerLayout'
        }
      }
    ],
    '@loadable/babel-plugin'
  ]
};
