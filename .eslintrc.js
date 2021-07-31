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
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off'
  }
};
