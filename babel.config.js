const presets = [];
const plugins = [
  // need this because of class properties
  // plugin messing up flow types
  // https://github.com/babel/babel/issues/8417
  '@babel/plugin-transform-flow-strip-types',
  '@babel/transform-exponentiation-operator',
  '@babel/plugin-syntax-dynamic-import',
  'styled-components',
  '@babel/plugin-proposal-class-properties',
  'inline-react-svg'
];

const prodPlugins = ['transform-remove-console'];
const nativePresets = ['module:metro-react-native-babel-preset'];

const moduleResolverNative = [
  'module-resolver',
  {
    root: ['./app'],
    extensions: ['.ios.js', '.android.js', '.js', '.json'],
    alias: {
      server: './server',
      modules: './app/modules',
      core: './app/core',
      app: './app',
      'react-native-gesture-handler/DrawerLayout': './app/modules/ui/mobile/DrawerLayout'
    }
  }
];

const pluginsTest = ['@babel/plugin-transform-runtime'];

module.exports = api => {
  api.cache(false);

  // This is needed because react-native v 0.61.2 sets BABEL_ENV to 'undefined' at some point during the build process which fucks up the babel config
  const env =
    process.env.BABEL_ENV && process.env.BABEL_ENV !== 'undefined'
      ? process.env.BABEL_ENV
      : process.env.NODE_ENV || 'development';

  switch (env) {
    case 'production':
      return {
        babelrcRoots: ['.', './packages/*'],
        ignore: ['node_modules'],
        plugins: [moduleResolverNative, ...plugins, ...prodPlugins],
        presets: [...presets, ...nativePresets]
      };
    case 'development':
      return {
        babelrcRoots: ['.', './packages/*'],
        ignore: ['node_modules'],
        plugins: [moduleResolverNative, ...plugins],
        presets: [...presets, ...nativePresets]
      };
    case 'test':
      return {
        babelrcRoots: ['.', './packages/*'],
        ignore: ['node_modules'],
        plugins: [...plugins, ...pluginsTest],
        presets: []
      };
    case 'development_web':
      return {
        babelrcRoots: ['.', './packages/*'],
        ignore: ['node_modules'],
        plugins: [...plugins],
        presets: []
      };
    default:
      return {
        babelrcRoots: ['.', './packages/*'],
        ignore: ['node_modules'],
        plugins: [...plugins],
        presets: [...presets]
      };
  }
};
