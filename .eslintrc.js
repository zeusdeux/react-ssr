// module.exports = {
//   extends: ['prettier', 'prettier/react'],
//   parserOptions: {
//     ecmaFeatures: {
//       experimentalObjectRestSpread: true,
//       jsx: true
//     },
//     sourceType: 'module'
//   },
//   plugins: ['react'],
//   rules: {
//     'linebreak-style': ['error', 'unix'],
// 'no-unused-vars': [
//   'error',
//   { vars: 'all', varsIgnorePattern: '^_', args: 'all', argsIgnorePattern: '^_' }
// ]
//   }
// }
module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    'no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'all', argsIgnorePattern: '^_' }
    ]
  }
}
