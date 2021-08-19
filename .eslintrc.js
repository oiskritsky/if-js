module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-console': 'off'
  }
};
