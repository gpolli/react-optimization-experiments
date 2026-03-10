// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import tanstackQuery from '@tanstack/eslint-plugin-query';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import vitestPlugin from 'eslint-plugin-vitest';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Ignore files that don't need linting
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'storybook-static/**',
    'next-env.d.ts',
    'public/mockServiceWorker.js',
  ]),
  // Storybook stories
  ...storybook.configs['flat/recommended'],
  // TanStack Query rules
  ...tanstackQuery.configs['flat/recommended'],
  // Import sorting
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  // Vitest rules for test files
  {
    files: ['src/**/*.{test,spec}.{ts,tsx}', '**/*.stories.{ts,tsx}'],
    plugins: { vitest: vitestPlugin },
    rules: vitestPlugin.configs.recommended.rules,
  },
  // Testing Library rules for test files
  {
    files: ['src/**/*.{test,spec}.{ts,tsx}'],
    ...testingLibrary.configs['flat/react'],
  },
  // Prettier: disable conflicting rules then enforce formatting
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);

export default eslintConfig;
