module.exports = {
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  plugins: ['react', 'immutable', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    },
    react: {
      version: 'detect'
    }
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      classes: true
    }
  },
  rules: {
    'immutable/no-let': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 'off',
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 1,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'no-console': 2,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/named': 1,
    'no-underscore-dangle': 0,
    // 'comma-dangle': ['error', 'only-multiline'],
    'no-plusplus': 'off',
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'global-require': 0,
    'arrow-parens': 0,
    'prefer-template': 0,
    'no-nested-ternary': 0,
    'no-mixed-operators': 0,
    'no-confusing-arrow': 0,
    'no-use-before-define': 0,
    'no-case-declarations': 0,
    // "no-restricted-properties": 0,
    'prefer-destructuring': [
      1,
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'space-before-function-paren': 0,
    'implicit-arrow-linebreak': 0,
    // indent: ['error', 2, { MemberExpression: 1, SwitchCase: 1 }],
    // 'newline-per-chained-call': [
    //   1,
    //   {
    //     ignoreChainWithDepth: 2
    //   }
    // ]
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    web3: false
  }
};
