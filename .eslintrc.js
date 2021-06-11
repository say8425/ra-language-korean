module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': false,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'indent': 'off',
    'quotes': 'off',
    'semi': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { 'code': 80, 'tabWidth': 2 }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/quotes': ['error', 'single', {
      'avoidEscape': true, 'allowTemplateLiterals': true,
    }],
    '@typescript-eslint/semi': ['error'],
  },
};
