module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    '@stylistic/js',
  ],
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
