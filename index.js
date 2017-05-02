'use strict';

const path = require('path');

const nodeModulesPath = path.dirname(path.dirname(require.resolve('tslint-eslint-rules')));

module.exports = {
	rulesDirectory: [
		path.join(nodeModulesPath, 'tslint-eslint-rules/dist/rules'),
		path.join(nodeModulesPath, 'tslint-microsoft-contrib'),
		path.join(nodeModulesPath, 'vrsource-tslint-rules/rules'),
		path.join(nodeModulesPath, 'tslint-immutable/rules')
	],
	rules: {
		'trailing-comma': [
			true,
			{
				multiline: 'never',
				singleline: 'never'
			}
		], // + comma-dangle
		// - no-await-in-loop
		// - no-compare-neg-zero
		'no-conditional-assignment': true, // + no-cond-assign
		'no-constant-condition': true, // + no-constant-condition
		'no-control-regex': true, // + no-control-regex
		'no-debugger': true, // + no-debugger
		// x no-dupe-args
		// x no-dupe-keys
		'no-duplicate-case': true, // + no-duplicate-case
		'no-empty-character-class': true, // + no-empty-character-class
		'no-empty': true, // +/- no-empty (missed 'allowEmptyCatch' option)
		'no-ex-assign': true, // + no-ex-assign
		'no-extra-boolean-cast': true, // + no-extra-boolean-cast
		'no-extra-semi': true, // + no-extra-semi
		// x no-func-assign
		'no-inner-declarations': [
			true,
			'functions'
		], // + no-inner-declarations
		'no-invalid-regexp': true, // + no-invalid-regexp
		'no-irregular-whitespace': true, // + no-irregular-whitespace
		// x no-obj-calls
		// - no-prototype-builtins
		'no-regex-spaces': true, // + no-regex-spaces
		'no-sparse-arrays': true, // + no-sparse-arrays
		// - no-template-curly-in-string
		// x no-unreachable
		'no-unsafe-finally': true, // + no-unsafe-finally
		// - no-unsafe-negation
		'use-isnan': true, // + use-isnan
		'valid-typeof': true, // +/- valid-typeof (missed 'requireStringLiterals' option)
		'no-unexpected-multiline': true, // + no-unexpected-multiline
		// - accessor-pairs
		// - array-callback-return
		'no-shadowed-variable': true, // + block-scoped-var
		// w complexity
		curly: true, // + curly
		'switch-default': true, // + default-case
		'dot-notation': [
			true,
			{
				'allow-pattern': '^[a-z]+(_[a-z]+)+$'
			}
		], // + dot-notation
		// - dot-location
		'triple-equals': true, // + eqeqeq
		forin: true, // + guard-for-in
		ban: [
			true,
			[
				'alert'
			]
		], // + no-alert
		'no-arg': true, // + no-caller
		// - no-case-declarations
		// - no-div-regex
		// - no-else-return
		// - no-empty-pattern
		// - no-eq-null
		'no-eval': true, // + no-eval
		// - no-extend-native
		// - no-extra-bind
		// - no-extra-label
		'no-switch-case-fall-through': true, // + no-fallthrough
		// - no-floating-decimal
		// - no-global-assign
		// - no-implicit-coercion
		// - no-implicit-globals
		// - no-implied-eval
		// - no-iterator
		'no-label': true, // + no-labels
		// - no-lone-blocks
		// - no-loop-func
		'no-multi-spaces': [
			true,
			{
				exceptions: {
					PropertyAssignment: true
				}
			}
		], // + no-multi-spaces
		// - no-multi-str
		// - no-new-func
		'no-construct': true, // + no-new-wrappers
		// - no-octal-escape
		// x no-octal
		// - no-proto
		'no-duplicate-variable': true, // + no-redeclare
		// - no-return-assign
		// - no-return-await
		// - no-script-url
		// - no-self-assign
		// - no-self-compare
		// - no-sequences
		'no-string-throw': true, // + no-throw-literal
		// - no-unmodified-loop-condition
		'no-unused-expression': true, // + no-unused-expressions + no-new
		// - no-unused-labels
		// - no-useless-call
		// - no-useless-concat
		// - no-useless-escape
		// - no-useless-return
		// - no-void
		// - no-warning-comments
		'no-with-statement': true, // + no-with
		// - prefer-promise-reject-errors,
		radix: true, // + radix
		// - wrap-iife
		// - yoda
		// x no-delete-var
		// - no-label-var
		// - no-restricted-globals
		// - no-shadow-restricted-names
		// - no-undef-init
		// x no-undef
		// x no-unused-vars
		'no-use-before-declare': true, // + no-use-before-define
		// w handle-callback-err
		// - no-mixed-requires
		// - no-new-require
		// - no-path-concat
		// - no-restricted-imports
		// - no-restricted-modules
		'array-bracket-spacing': [
			true,
			'never'
		], // + array-bracket-spacing
		'brace-style': [
			true,
			'1tbs',
			{
				allowSingleLine: false
			}
		], // + brace-style
		'variable-name': [
			true,
			'check-format'
		], // + camelcase
		// - comma-spacing
		// - comma-style
		// - computed-property-spacing
		eofline: true, // + eol-last
		// - func-call-spacing
		// - func-name-matching
		// - func-names
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
		], // + indent
		// - key-spacing
		// - keyword-spacing
		'linebreak-style': 'LF', // + linebreak-style
		// - max-depth
		// - max-nested-callbacks
		// - max-params
		// - max-statements-per-line
		// x new-cap
		'new-parens': true, // + new-parens
		// - no-array-constructor
		// - no-lonely-if
		// - no-mixed-operators
		indent: [
			true,
			'tabs'
		], // + no-mixed-spaces-and-tabs
		// - no-multi-assign
		'no-consecutive-blank-lines': true, // + no-multiple-empty-lines
		// - no-negated-condition
		// - no-new-object
		// - no-restricted-syntax
		// - no-whitespace-before-property
		'no-trailing-whitespace': true, // + no-trailing-spaces
		// - no-unneeded-ternary
		'object-curly-spacing': [
			true,
			'never'
		], // + object-curly-spacing
		'one-variable-per-declaration': true, // + one-var // + one-var-declaration-per-line
		// - operator-assignment
		// - operator-linebreak
		// - padded-blocks
		'object-literal-key-quotes': [
			true,
			'as-needed'
		], // + quote-props
		quotemark: [
			true,
			'single',
			'jsx-double',
			'avoid-escape'
		], // + quotes // + jsx-quotes
		whitespace: [
			true,
			'check-separator'
		], // + semi-spacing (missed `before` option)
		semicolon: [
			true,
			'always'
		], // + semi
		// - space-before-blocks
		'space-before-function-paren': [
			true,
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		], // + space-before-function-paren
		'space-in-parens': [
			true,
			'never'
		],
		// - space-infix-ops
		// - space-unary-ops
		'comment-format': [
			true,
			'check-space', // 'always'
			'check-uppercase' // + capitalized-comments
		], // + spaced-comment
		// - template-tag-spacing
		// - unicode-bom
		'ter-arrow-parens': [
			true,
			'as-needed'
		], // + arrow-parens
		'ter-arrow-spacing': [
			true,
			{
				before: true,
				after: true
			}
		], // + arrow-spacing
		// x constructor-super
		// - generator-star-spacing
		// - no-class-assign
		// x no-const-assign
		// x no-dupe-class-members
		'no-duplicate-imports': true // + no-duplicate-imports
		// - no-new-symbol
		// x no-this-before-super
		// - no-useless-computed-key
		// - no-useless-constructor
		// - no-useless-rename
		// - require-yield
		// - rest-spread-spacing
		// - symbol-description
		// - template-curly-spacing
		// - yield-star-spacing
	}
};
