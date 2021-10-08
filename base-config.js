const config = {
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:promise/recommended',
		'xo',
		'xo-react',
		'prettier',
	],
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			legacyDecorators: true,
			jsx: true,
		},
	},
	plugins: [
		'promise',
		'babel',
		'unicorn',
		'react-hooks',
		'react-native',
		'import',
		'prettier',
	],
	rules: {
		'object-curly-spacing': ['error', 'always'],
		radix: 'warn',
		'default-case': ['off'],
		'new-cap': 'warn',
		'no-negated-condition': 'warn',
		'prefer-const': 'warn',
		'react/no-array-index-key': 'warn',
		'capitalized-comments': ['off'],
		'react/boolean-prop-naming': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'no-unused-expressions': 0,
		'no-return-assign': ['error', 'except-parens'],
		'lines-between-class-members': 0,
		'react/jsx-child-element-spacing': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/destructuring-assignment': 0,
		'react/forbid-component-props': 0,
		'react/static-property-placement': 'warn',
		'react/state-in-constructor': 'warn',
		'react/no-danger': 'warn',
		'react/forbid-dom-props': 0,
		'react/no-unescaped-entities': 0,
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
				when: 'multiline',
			},
		],
		'react/no-deprecated': 'warn',
		'react/jsx-sort-props': 0,
		'unicorn/filename-case': [
			'error',
			{
				case: 'kebabCase',
			},
		],
		'unicorn/no-abusive-eslint-disable': 'warn',
		'react/jsx-indent': 'off',
		'react/jsx-fragments': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'valid-jsdoc': 0,
		'babel/no-unused-expressions': 1,
		'import/order': 0,
		'import/no-unresolved': 0,
		'import/default': 0,
		'import/namespace': 0,
		'import/named': 0,
		'promise/always-return': 0,
		'promise/prefer-await-to-then': 0,
		'require-atomic-updates': 'warn',
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'all',
				endOfLine: 'auto',
				useTabs: true,
				singleQuote: true,
				printWidth: 80,
				arrowParens: 'avoid',
			},
		],
	},
	settings: {
		react: {
			version: 'latest',
		},
		'import/resolver': {},
	},
};

const cfg = JSON.parse(JSON.stringify(config));

config.overrides = [];
config.overrides[0] = {
	...cfg,
	files: ['**/*.ts', '**/*.tsx'],
	extends: [
		...cfg.extends,
		'plugin:@typescript-eslint/recommended',
		'xo-typescript',
	],
	plugins: [...cfg.plugins, '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		warnOnUnsupportedTypeScriptVersion: false,
	},
	rules: {
		...cfg.rules,

		'@typescript-eslint/comma-dangle': ['off'],
		'@typescript-eslint/consistent-indexed-object-style': ['warn'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/indent': ['off'],
		'@typescript-eslint/lines-between-class-members': ['off'],
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/no-confusing-void-expression': ['off'],
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$',
			},
		],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/prefer-optional-chain': ['warn'],
		'@typescript-eslint/prefer-readonly': ['off'],
		'@typescript-eslint/prefer-readonly-parameter-types': ['off'],
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowNullish: true,
			},
		],
		'comma-dangle': ['off'],
		'no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$',
			},
		],
		'object-curly-spacing': 'off',
	},
};

module.exports = config;
