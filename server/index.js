if (process.env.NODE_ENV === 'production') {
  require('newrelic');
}
delete process.env.BROWSER;
process.env.WEB = 'true';

require('@babel/register')({
  // Ignore everything in node_modules except node_modules/react-native-web-linear-gradient.
  ignore: [/node_modules\/(?!react-native)/],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./app', './app/modules'],
        alias: {
          server: './server',
          modules: './app/modules',
          core: './app/core',
          app: './app',
          '^react-native$': 'react-native-web',
          'react-native-linear-gradient$': 'react-native-web-linear-gradient/src/index'
        }
      }
    ]
  ],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

require('@babel/polyfill');
require('./server');

// prevents require images
require.extensions['.png'] = () => {};
require.extensions['.jpg'] = () => {};
require.extensions['.jpeg'] = () => {};
require.extensions['.gif'] = () => {};
