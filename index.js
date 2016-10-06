'use strict';

const path = require('path');

module.exports = {
	rulesDirectory: [
		path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
		path.dirname(require.resolve('tslint-microsoft-contrib'))
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
		//   * object-curly-spacing
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
		//   * spaced-comment
		//   * unicode-bom
		//   * arrow-spacing
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
		'no-duplicate-key': true, // no-dupe-keys
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
		'no-unreachable': true,
		'no-unsafe-finally': true,
		'use-isnan': true,
		'valid-typeof': true, // 'requireStringLiterals' not implemented
		'no-unexpected-multiline': true,
		'no-shadowed-variable': true, // block-scoped-var (?)
		'curly': true,
		'switch-default': true, // default-case
		'triple-equals': true, // eqeqeq
		'forin': true, // guard-for-in
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
		'radix': true,
		'no-unused-variable': [
			true,
			{
				'ignore-pattern': '^_$'
			}
		], // no-unused-vars
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
		'eofline': true, // eol-last
		'indent': [
			true,
			'tabs'
		], // indent + no-mixed-spaces-and-tabs
		'linebreak-style': 'LF',
		'new-parens': true,
		'no-consecutive-blank-lines': true, // no-multiple-empty-lines
		'no-trailing-whitespace': true, // no-trailing-spaces
		'one-variable-per-declaration': true, // one-var + one-var-declaration-per-line
		'object-literal-key-quotes': [
			true,
			'as-needed'
		], // quote-props
		'quotemark': [
			true,
			'single',
			'jsx-double',
			'avoid-escape'
		] // quotes + jsx-quotes
		// 'as-needed' not implemented in 'arrow-parens'
	}
};
