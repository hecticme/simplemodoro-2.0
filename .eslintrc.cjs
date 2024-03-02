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
    'no-unexpected-multiline': 'error',
    '@stylistic/js/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    '@stylistic/js/eol-last': [
      'error',
    ],
    '@stylistic/js/function-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/js/indent': [
      'error',
      2,
    ],
    '@stylistic/js/no-tabs': [
      'error',
    ],
    '@stylistic/js/no-trailing-spaces': [
      'error',
    ],
    '@stylistic/js/object-curly-spacing': [
      'error',
      'always',
    ],
    '@stylistic/js/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@stylistic/js/quote-props': [
      'error',
      'as-needed',
    ],
    '@stylistic/js/semi': [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    '@stylistic/js/space-before-function-paren': [
      'error',
      'always',
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
  },
}
