module.exports = {
  plugins: {
    'postcss-import': {
      // addModulesDirectories: ['app', 'app/components'],
      path: ['packages/app/src']
    },
    precss: {},
    autoprefixer: {},
    'postcss-easings': {}
  }
};
