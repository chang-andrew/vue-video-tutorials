module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'indent': 'off',
    'comma-dangle': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/camelcase': 'warn',
    'no-plusplus': 'warn',
    'import/order': 'warn',
    'prefer-destructuring': 'off',
  },
};
