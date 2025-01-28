import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

const jsxA11y = require('eslint-plugin-jsx-a11y');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		plugins: {
			'jsx-a11y': jsxA11y,
			'react-hooks': reactHooks,
		},
	},
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'no-unused-vars': 'off',
			'import/no-dynamic-require': 'warn',
			'import/no-nodejs-modules': 'warn',
			'jsx-a11y/alt-text': 'error',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	js.configs.recommended,
	importPlugin.flatConfigs.recommended,
];
