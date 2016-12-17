'use strict';

const path = require('path');

const nodeModulesPath = path.join(process.cwd(), 'node_modules');

module.exports = {
	rulesDirectory: [
		path.join(nodeModulesPath, 'tslint-eslint-rules/dist/rules'),
		path.join(nodeModulesPath, 'tslint-microsoft-contrib'),
		path.join(nodeModulesPath, 'vrsource-tslint-rules/rules')
	],
	rules: {
		// Not applicable to TypeScript:
		//   * no-dupe-args
		//   * no-func-assign
		//   * no-obj-calls
		//   * no-native-reassign
		//   * no-delete-var
		//   * no-undef
		//   * new-cap
		//   * no-dupe-class-members
		//   * no-unused-vars
		//   * no-dupe-keys
		//   * no-unreachable

		// No warn:
		//   * complexity
		//   * no-warning-comments
		//   * handle-callback-err (implemented, but warn)
		//   * max-depth
		//   * max-nested-callbacks
		//   * max-params

		// Not implement:
		//   * no-prototype-builtins
		//   * no-unsafe-negation
		//   * no-template-curly-in-string
		//   * accessor-pairs
		//   * array-callback-return
		//   * dot-notation
		//   * dot-location
		//   * no-alert
		//   * no-case-declarations
		//   * no-div-regex
		//   * no-empty-pattern
		//   * no-eq-null
		//   * no-extend-native
		//   * no-extra-bind
		//   * no-extra-label
		//   * no-floating-decimal
		//   * no-global-assign
		//   * no-implicit-coercion
		//   * no-implicit-globals
		//   * no-implied-eval
		//   * no-iterator
		//   * no-labels
		//   * no-lone-blocks
		//   * no-loop-func
		//   * no-multi-str
		//   * no-new-func
		//   * no-new-wrappers
		//   * no-proto
		//   * no-return-assign
		//   * no-script-url
		//   * no-self-assign
		//   * no-self-compare
		//   * no-sequences
		//   * no-throw-literal
		//   * no-unmodified-loop-condition
		//   * no-unused-labels
		//   * no-useless-call
		//   * no-useless-concat
		//   * no-useless-escape
		//   * no-void
		//   * wrap-iife
		//   * yoda
		//   * no-label-var
		//   * no-restricted-globals
		//   * no-shadow-restricted-names
		//   * no-undef-init
		//   * no-mixed-requires
		//   * no-new-require
		//   * no-path-concat
		//   * no-restricted-imports
		//   * no-restricted-modules
		//   * comma-spacing
		//   * comma-style
		//   * computed-property-spacing
		//   * eol-last
		//   * func-call-spacing
		//   * func-names
		//   * key-spacing
		//   * keyword-spacing
		//   * max-statements-per-line
		//   * no-array-constructor
		//   * no-lonely-if
		//   * no-mixed-operators
		//   * no-negated-condition
		//   * no-new-object
		//   * no-restricted-syntax
		//   * no-whitespace-before-property
		//   * no-spaced-func
		//   * no-unneeded-ternary
		//   * operator-assignment
		//   * operator-linebreak
		//   * padded-blocks
		//   * semi-spacing
		//   * semi
		//   * space-before-blocks
		//   * space-before-function-paren
		//   * space-in-parens
		//   * space-infix-ops
		//   * space-unary-ops
		//   * unicode-bom
		//   * constructor-super
		//   * generator-star-spacing
		//   * no-class-assign
		//   * no-const-assign
		//   * no-new-symbol
		//   * no-this-before-super
		//   * no-useless-computed-key
		//   * no-useless-constructor
		//   * no-useless-rename
		//   * require-yield
		//   * rest-spread-spacing
		//   * symbol-description
		//   * template-curly-spacing
		//   * yield-star-spacing
		//   * no-duplicate-imports

		'trailing-comma': [
			true, {
				multiline: 'never',
				singleline: 'never'
			}
		], // comma-dangle
		'no-conditional-assignment': true, // no-cond-assign
		'no-constant-condition': true,
		'no-control-regex': true,
		'no-debugger': true,
		'no-duplicate-case': true,
		'no-empty-character-class': true,
		'no-empty': true, // No option: `allowEmptyCatch: true`
		'no-ex-assign': true,
		'no-extra-boolean-cast': true,
		'no-extra-semi': true,
		'no-inner-declarations': [
			true,
			'functions'
		],
		'no-invalid-regexp': true,
		'no-irregular-whitespace': true,
		'no-regex-spaces': true,
		'no-sparse-arrays': true,
		'no-unsafe-finally': true,
		'use-isnan': true,
		'valid-typeof': true, // 'requireStringLiterals' not implemented
		'no-unexpected-multiline': true,
		'no-shadowed-variable': true, // block-scoped-var (?)
		curly: true,
		'dot-notation': [
			true,
			{
				'allow-pattern': '^[a-z]+(_[a-z]+)+$'
			}
		], // dot-notation
		'switch-default': true, // default-case
		'triple-equals': true, // eqeqeq
		forin: true, // guard-for-in
		'no-arg': true, // no-caller
		'no-eval': true,
		'no-switch-case-fall-through': true, // no-fallthrough
		'no-multi-spaces': [
			true,
			{
				exceptions: {
					PropertyAssignment: true
				}
			}
		],
		'no-unused-new': true, // no-new
		'no-octal-literal': true, // no-octal + no-octal-escape
		'no-duplicate-variable': true, // no-redeclare
		'no-unused-expression': true, // no-unused-expressions
		'no-with-statement': true, // no-with
		radix: true,
		'no-use-before-declare': true, // no-use-before-define
		'brace-style': [
			true,
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'array-bracket-spacing': [
			true,
			'never'
		],
		'variable-name': [
			true,
			'check-format'
		], // camelcase
		eofline: true, // eol-last
		indent: [
			true,
			'tabs'
		], // no-mixed-spaces-and-tabs
		'ter-indent': [
			true,
			'tab',
			{
				SwitchCase: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1
				},
				FunctionExpression: {
					parameters: 1,
					body: 1
				},
				CallExpression: {
					arguments: 1
				}
			}
		], // indent
		'linebreak-style': 'LF',
		'new-parens': true,
		'no-consecutive-blank-lines': true, // no-multiple-empty-lines
		'no-trailing-whitespace': true, // no-trailing-spaces
		'one-variable-per-declaration': true, // one-var + one-var-declaration-per-line
		'object-literal-key-quotes': [
			true,
			'as-needed'
		], // quote-props
		'object-curly-spacing': [
			true,
			'never'
		],
		quotemark: [
			true,
			'single',
			'jsx-double',
			'avoid-escape'
		], // quotes + jsx-quotes
		'comment-format': [
			true,
			'check-space' // 'always'
		], // spaced-comment, but without 'line' & 'block' options
		'ter-arrow-parens': [
			true,
			'as-needed'
		], // ter-arrow-parens
		'ter-arrow-spacing': [
			true,
			{
				before: true,
				after: true
			}
		] // arrow-spacing
	}
};
