// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        process: 'readonly',
      },
    },
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'semi': ['error', 'never'],
      '@typescript-eslint/semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      '@typescript-eslint/quotes': ['error', 'single'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      '@typescript-eslint/indent': ['error', 2],
      'max-len': ['warn', { code: 100 }],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-undef': 'warn',
    },
  },
]
