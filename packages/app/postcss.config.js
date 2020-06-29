const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      // addModulesDirectories: ['app', 'app/components'],
      path: [path.join(__dirname, './src')]
    },
    precss: {},
    autoprefixer: {},
    'postcss-easings': {}
  }
};
