require('./utils/env');

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) require('newrelic');

delete process.env.BROWSER;
process.env.WEB = 'true';

// This is needed in order to transpile react-native module (required by react-native-web-linear-gradient)
require('@babel/register')({
  // Ignore everything in node_modules except node_modules/react-native-web-linear-gradient.
  // ignore: [/node_modules\/(?!react-native)/],
  only: [/node_modules\/react-native/],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          'react-native-svg$': 'react-native-web-svg',
          '^react-native$': 'react-native-web',
          'react-native-linear-gradient$': 'react-native-web-linear-gradient/src/index'
        }
      }
    ]
  ],
  presets: ['@babel/preset-env']
});

!isProduction && require('@babel/polyfill');
require('./server');

// prevents require images
require.extensions['.png'] = (module, filename) => filename;
require.extensions['.jpg'] = (module, filename) => filename;
require.extensions['.jpeg'] = (module, filename) => filename;
require.extensions['.gif'] = (module, filename) => filename;
