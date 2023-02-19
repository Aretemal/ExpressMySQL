module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'linebreak-style': [2, 'windows'],
    'import/prefer-default-export': 0,
  },
};
