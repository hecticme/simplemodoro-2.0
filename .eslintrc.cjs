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
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'script',
          'template',
          'style',
        ],
      },
    ],
    'vue/define-macros-order': [
      'error',
      {
        order: [
          'defineOptions',
          'defineModel',
          'defineProps',
          'defineEmits',
          'defineSlots',
        ],
      },
    ],
    'vue/first-attribute-linebreak': [
      'error',
    ],
    'vue/html-closing-bracket-newline':[
      'error',
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/max-attributes-per-line': [
      'error',
    ],
    'vue/padding-line-between-blocks': [
      'error',
      'always',
    ],
  },
}
