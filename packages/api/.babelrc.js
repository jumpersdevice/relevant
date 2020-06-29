module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          server: './src',
          app: '@r3l/app/lib',
          'react-native-svg$': 'react-native-web-svg',
          '^react-native$': 'react-native-web',
          'react-native-linear-gradient$': 'react-native-web-linear-gradient'
        }
      }
    ]
  ]
};
