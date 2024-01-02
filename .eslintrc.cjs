module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    '@stylistic/js',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@stylistic/js/comma-dangle': [
      'error',
      'always-multiline',
    ],
    '@stylistic/js/indent': [
      'error',
      2,
    ],
    '@stylistic/js/no-tabs': [
      'error',
    ],
    '@stylistic/js/object-curly-spacing': [
      'error',
      'always',
    ],
    '@stylistic/js/quotes': [
      'error',
      'single',
    ],
    '@stylistic/js/quote-props': [
      'error',
      'as-needed',
    ],
    '@stylistic/js/semi': [
      'error',
      'always',
    ],
  },
};
