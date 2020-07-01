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
    extensions: ['.ios.js', '.android.js', '.js', '.json'],
    alias: {
      '@r3/common': './packages/common/src',
      modules: './packages/app/src/modules',
      core: './packages/app/src/core',
      utils: './packages/app/src/utils',
      styles: './packages/app/src/styles',
      app: './packages/app/src/',
      public: './packages/app/public',
      'react-native-gesture-handler/DrawerLayout':
        './packages/app/src/modules/ui/mobile/DrawerLayout'
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
    case 'production': // these are react-native prod settings
      return {
        ignore: ['node_modules'],
        plugins: [moduleResolverNative, ...plugins, ...prodPlugins],
        presets: [...presets, ...nativePresets]
      };
    case 'development': // these are react-native settings
      return {
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
    case 'development_web': // web & node settings
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
