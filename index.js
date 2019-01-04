'use strict';

const path = require('path');

function getRulePackageDirectory(name, suffix) {
	const packagePath = require.resolve(name);
	const nodeModulesPath = path.dirname(packagePath);

	return path.join(nodeModulesPath, suffix || '');
}

module.exports = {
	rulesDirectory: [
		getRulePackageDirectory('tslint-eslint-rules', 'dist/rules'),
		getRulePackageDirectory('tslint-microsoft-contrib'),
		getRulePackageDirectory('vrsource-tslint-rules', 'rules'),
		getRulePackageDirectory('tslint-divid', 'rules'),
		getRulePackageDirectory('tslint-consistent-codestyle')
	],
	rules: {
		/**
		 * @eslint {comma-dangle}
		 * @provider {tslint}
		 */
		'trailing-comma': [
			true,
			{
				multiline: 'never',
				singleline: 'never'
			}
		],

		/**
		 * @eslint {for-direction}
		 * @unavailable
		 */
		// 'for-direction': null,

		/**
		 * @eslint {getter-return}
		 * @unavailable
		 */
		// 'getter-return': null,

		/**
		 * @eslint {no-async-promise-executor}
		 * @unavailable
		 */
		// 'no-async-promise-executor': null,

		/**
		 * @eslint {no-await-in-loop}
		 * @unavailable
		 */
		// 'no-await-in-loop': null,

		/**
		 * @eslint {no-compare-neg-zero}
		 * @unavailable
		 */
		// 'no-compare-neg-zero': null,

		/**
		 * @eslint {no-cond-assign}
		 * @provider {tslint}
		 */
		'no-conditional-assignment': true,

		/**
		 * @eslint {no-constant-condition}
		 * @provider {tslint-eslint-rules}
		 */
		'no-constant-condition': true,

		/**
		 * @eslint {no-control-regex}
		 * @provider {tslint-eslint-rules}
		 */
		'no-control-regex': true,

		/**
		 * @eslint {no-debugger}
		 * @provider {tslint}
		 */
		'no-debugger': true,

		/**
		 * @eslint {no-dupe-args}
		 * @notApplicable
		 */
		// 'no-dupe-args': null,

		/**
		 * @eslint {no-dupe-keys}
		 * @notApplicable
		 */
		// 'no-dupe-keys': null,

		/**
		 * @eslint {no-duplicate-case}
		 * @provider {tslint-eslint-rules}
		 */
		'no-duplicate-case': true,

		/**
		 * @eslint {no-empty-character-class}
		 * @provider {tslint-eslint-rules}
		 */
		'no-empty-character-class': true,

		/**
		 * @eslint {no-empty}
		 * @provider {tslint}
		 * @missed {allowEmptyCatch}
		 */
		'no-empty': true,

		/**
		 * @eslint {no-ex-assign}
		 * @provider {tslint-eslint-rules}
		 */
		'no-ex-assign': true,

		/**
		 * @eslint {no-extra-boolean-cast}
		 * @provider {tslint-eslint-rules}
		 */
		'no-extra-boolean-cast': true,

		/**
		 * @eslint {no-extra-semi}
		 * @provider {tslint-eslint-rules}
		 */
		'no-extra-semi': true,

		/**
		 * @eslint {no-func-assign}
		 * @notApplicable
		 */
		// 'no-func-assign': null,

		/**
		 * @eslint {no-inner-declarations}
		 * @provider {tslint-eslint-rules}
		 */
		'no-inner-declarations': [
			true,
			'functions'
		],

		/**
		 * @eslint {no-invalid-regexp}
		 * @provider {tslint-eslint-rules}
		 */
		'no-invalid-regexp': true,

		/**
		 * @eslint {no-irregular-whitespace}
		 * @provider {tslint}
		 */
		'no-irregular-whitespace': true,

		/**
		 * @eslint {no-misleading-character-class}
		 * @unavailable
		 */
		// 'no-misleading-character-class': null,

		/**
		 * @eslint {no-obj-calls}
		 * @notApplicable
		 */
		// 'no-obj-calls': null,

		/**
		 * @eslint {no-prototype-builtins}
		 * @unavailable
		 */
		// 'no-prototype-builtins': null,

		/**
		 * @eslint {no-regex-spaces}
		 * @provider {tslint-eslint-rules}
		 */
		'no-regex-spaces': true,

		/**
		 * @eslint {no-sparse-arrays}
		 * @provider {tslint}
		 */
		'no-sparse-arrays': true,

		/**
		 * @eslint {no-template-curly-in-string}
		 * @provider {tslint}
		 */
		'no-invalid-template-strings': true,

		/**
		 * @eslint {no-unreachable}
		 * @notApplicable
		 */
		// 'no-unreachable': null,

		/**
		 * @eslint {no-unsafe-finally}
		 * @provider {tslint}
		 */
		'no-unsafe-finally': true,

		/**
		 * @eslint {no-unsafe-negation}
		 * @unavailable
		 */
		// 'no-unsafe-negation': null,

		/**
		 * @eslint {require-atomic-updates}
		 * @unavailable
		 */
		// 'require-atomic-updates': null,

		/**
		 * @eslint {use-isnan}
		 * @provider {tslint}
		 */
		'use-isnan': true,

		/**
		 * @eslint {valid-typeof}
		 * @provider {tslint-eslint-rules}
		 * @missed {requireStringLiterals}
		 */
		'valid-typeof': true,

		/**
		 * @eslint {no-unexpected-multiline}
		 * @provider {tslint-eslint-rules}
		 */
		'no-unexpected-multiline': true,

		/**
		 * @eslint {accessor-pairs}
		 * @unavailable
		 */
		// 'accessor-pairs': null,

		/**
		 * @eslint {array-callback-return}
		 * @unavailable
		 */
		// 'array-callback-return': null,

		/**
		 * @eslint {block-scoped-var}
		 * @provider {tslint}
		 */
		'no-shadowed-variable': true,

		/**
		 * @eslint {complexity}
		 * @provider {tslint}
		 */
		'cyclomatic-complexity': {
			severity: 'warning'
		},

		/**
		 * @eslint {curly}
		 * @provider {tslint}
		 */
		curly: true,

		/**
		 * @eslint {default-case}
		 * @provider {tslint}
		 */
		'switch-default': true,

		/**
		 * @eslint {dot-notation}
		 * @provider {tslint}
		 */
		'no-string-literal': true,

		/**
		 * @eslint {dot-location}
		 * @unavailable
		 */
		// 'dot-location': null,

		/**
		 * @eslint {eqeqeq}
		 * @provider {tslint}
		 */
		'triple-equals': true,

		/**
		 * @eslint {guard-for-in}
		 * @provider {tslint}
		 */
		forin: true,

		/**
		 * @eslint {no-alert}
		 * @provider {tslint}
		 */
		ban: [
			true,
			[
				'alert'
			]
		],

		/**
		 * @eslint {no-caller}
		 * @provider {tslint}
		 */
		'no-arg': true,

		/**
		 * @eslint {no-case-declarations}
		 * @unavailable
		 */
		// 'no-case-declarations': null,

		/**
		 * @eslint {no-div-regex}
		 * @unavailable
		 */
		// 'no-div-regex': null,

		/**
		 * @eslint {no-else-return}
		 * @provider {tslint-consistent-codestyle}
		 */
		'no-else-after-return': [
			true,
			'allow-else-if'
		],

		/**
		 * @eslint {no-empty-pattern}
		 * @unavailable
		 */
		// 'no-empty-pattern': null,

		/**
		 * @eslint {no-eq-null}
		 * @unavailable
		 */
		// 'no-eq-null': null,

		/**
		 * @eslint {no-eval}
		 * @provider {tslint}
		 */
		'no-eval': true,

		/**
		 * @eslint {no-extend-native}
		 * @unavailable
		 */
		// 'no-extend-native': null,

		/**
		 * @eslint {no-extra-bind}
		 * @provider {tslint}
		 */
		'unnecessary-bind': true,

		/**
		 * @eslint {no-extra-label}
		 * @unavailable
		 */
		// 'no-extra-label': null,

		/**
		 * @eslint {no-fallthrough}
		 * @provider {tslint}
		 */
		'no-switch-case-fall-through': true,

		/**
		 * @eslint {no-floating-decimal}
		 * @provider {tslint}
		 */
		'number-literal-format': true,

		/**
		 * @eslint {no-global-assign}
		 * @unavailable
		 */
		// 'no-global-assign': null,

		/**
		 * @eslint {no-implicit-coercion}
		 * @unavailable
		 */
		// 'no-implicit-coercion': null,

		/**
		 * @eslint {no-implicit-globals}
		 * @unavailable
		 */
		// 'no-implicit-globals': null,

		/**
		 * @eslint {no-implied-eval}
		 * @unavailable
		 */
		// 'no-implied-eval': null,

		/**
		 * @eslint {no-iterator}
		 * @unavailable
		 */
		// 'no-iterator': null,

		/**
		 * @eslint {no-labels}
		 * @provider {tslint-divid}
		 */
		'no-label': true,

		/**
		 * @eslint {no-lone-blocks}
		 * @unavailable
		 */
		// 'no-lone-blocks': null,

		/**
		 * @eslint {no-multi-spaces}
		 * @provider {tslint-eslint-rules}
		 */
		'no-multi-spaces': [
			true,
			{
				exceptions: {
					PropertyAssignment: true
				}
			}
		],

		/**
		 * @eslint {no-multi-str}
		 * @unavailable
		 */
		// 'no-multi-str': null,

		/**
		 * @eslint {no-new-func}
		 * @eslint {no-array-constructor}
		 * @eslint {no-new-object}
		 * @provider {vrsource-tslint-rules}
		 */
		'prefer-literal': [
			true,
			'object',
			'function',
			'array'
		],

		/**
		 * @eslint {no-new-wrappers}
		 * @provider {tslint}
		 */
		'no-construct': true,

		/**
		 * @eslint {no-new}
		 * @eslint {no-unused-expressions}
		 * @provider {tslint}
		 */
		'no-unused-expression': true,

		/**
		 * @eslint {no-octal-escape}
		 * @provider {tslint-microsoft-contrib}
		 */
		'no-octal-literal': true,

		/**
		 * @eslint {no-octal}
		 * @notApplicable
		 */
		// 'no-octal': null,

		/**
		 * @eslint {no-proto}
		 * @unavailable
		 */
		// 'no-proto': null,

		/**
		 * @eslint {no-redeclare}
		 * @provider {tslint}
		 */
		'no-duplicate-variable': true,

		/**
		 * @eslint {no-return-assign}
		 * @unavailable
		 */
		// 'no-return-assign': null,

		/**
		 * @eslint {no-return-await}
		 * @provider {tslint}
		 */
		'no-return-await': true,

		/**
		 * @eslint {no-script-url}
		 * @unavailable
		 */
		// 'no-script-url': null,

		/**
		 * @eslint {no-self-assign}
		 * @unavailable
		 */
		// 'no-self-assign': null,

		/**
		 * @eslint {no-self-compare}
		 * @unavailable
		 */
		// 'no-self-compare': null,

		/**
		 * @eslint {no-sequences}
		 * @unavailable
		 */
		// 'no-sequences': null,

		/**
		 * @eslint {no-throw-literal}
		 * @provider {tslint}
		 */
		'no-string-throw': true,

		/**
		 * @eslint {no-unmodified-loop-condition}
		 * @unavailable
		 */
		// 'no-unmodified-loop-condition': null,

		/**
		 * @eslint {no-unused-labels}
		 * @unavailable
		 */
		// 'no-unused-labels': null,

		/**
		 * @eslint {no-useless-call}
		 * @unavailable
		 */
		// 'no-useless-call': null,

		/**
		 * @eslint {no-useless-concat}
		 * @unavailable
		 */
		// 'no-useless-concat': null,

		/**
		 * @eslint {no-useless-escape}
		 * @unavailable
		 */
		// 'no-useless-escape': null,

		/**
		 * @eslint {no-useless-return}
		 * @unavailable
		 */
		// 'no-useless-return': null,

		/**
		 * @eslint {no-void}
		 * @unavailable
		 */
		// 'no-void': null,

		/**
		 * @eslint {no-warning-comments}
		 * @unavailable
		 */
		// 'no-warning-comments': null,

		/**
		 * @eslint {no-with}
		 * @provider {tslint-microsoft-contrib}
		 */
		'no-with-statement': true,

		/**
		 * @eslint {prefer-promise-reject-errors}
		 * @unavailable
		 */
		// 'prefer-promise-reject-errors': null,

		/**
		 * @eslint {radix}
		 * @provider {tslint}
		 */
		radix: true,

		/**
		 * @eslint {wrap-iife}
		 * @unavailable
		 */
		// 'wrap-iife': null,

		/**
		 * @eslint {yoda}
		 * @unavailable
		 */
		// yoda: null,

		/**
		 * @eslint {no-delete-var}
		 * @notApplicable
		 */
		// 'no-delete-var': null,

		/**
		 * @eslint {no-label-var}
		 * @unavailable
		 */
		// 'no-label-var': null,

		/**
		 * @eslint {no-restricted-globals}
		 * @unavailable
		 */
		// 'no-restricted-globals': null,

		/**
		 * @eslint {no-shadow-restricted-names}
		 * @unavailable
		 */
		// 'no-shadow-restricted-names': null,

		/**
		 * @eslint {no-undef-init}
		 * @unavailable
		 */
		// 'no-undef-init': null,

		/**
		 * @eslint {no-undef}
		 * @notApplicable
		 */
		// 'no-undef': null,

		/**
		 * @eslint {no-unused-vars}
		 * @typescript {noUnusedLocals}
		 * @typescript {noUnusedParameters}
		 * @provider {typescript}
		 */
		// 'no-unused-variable': null

		/**
		 * @eslint {handle-callback-err}
		 * @provider {tslint-eslint-rules}
		 */
		'handle-callback-err': {
			severity: 'warning'
		},

		/**
		 * @eslint {no-buffer-constructor}
		 * @unavailable
		 */
		// 'no-buffer-constructor': null,

		/**
		 * @eslint {no-mixed-requires}
		 * @unavailable
		 */
		// 'no-mixed-requires': null,

		/**
		 * @eslint {no-new-require}
		 * @unavailable
		 */
		// 'no-new-require': null,

		/**
		 * @eslint {no-path-concat}
		 * @unavailable
		 */
		// 'no-path-concat': null,

		/**
		 * @eslint {no-restricted-imports}
		 * @unavailable
		 */
		// 'no-restricted-imports': null,

		/**
		 * @eslint {no-restricted-modules}
		 * @unavailable
		 */
		// 'no-restricted-modules': null,

		/**
		 * @eslint {array-bracket-newline}
		 * @unavailable
		 */
		// 'array-bracket-newline': null,

		/**
		 * @eslint {array-bracket-spacing}
		 * @provider {tslint-eslint-rules}
		 */
		'array-bracket-spacing': [
			true,
			'never'
		],

		/**
		 * @eslint {array-element-newline}
		 * @unavailable
		 */
		// 'array-element-newline': null,

		/**
		 * @eslint {brace-style}
		 * @missed {allowSingleLine}
		 * @provider {tslint}
		 */
		'one-line': [
			true,
			'check-catch',
			'check-finally',
			'check-else',
			'check-open-brace',
			'check-whitespace'
		],

		/**
		 * @eslint {camelcase}
		 * @provider {tslint}
		 */
		'variable-name': [
			true,
			'check-format',
			'allow-leading-underscore',
			'allow-trailing-underscore'
		],

		/**
		 * @eslint {capitalized-comments}
		 * @eslint {spaced-comment}
		 * @missed {ignoreInlineComments}
		 * @missed {ignoreConsecutiveComments}
		 * @provider {tslint}
		 */
		'comment-format': [
			true,
			'check-space', // 'always'
			'check-uppercase', // Rule: capitalized-comments
			{
				'ignore-words': ['pragma', 'ignore', 'prettier-ignore'] // ignorePattern
			}
		],

		/**
		 * @eslint {comma-spacing}
		 * @unavailable
		 */
		// 'comma-spacing': null,

		/**
		 * @eslint {comma-style}
		 * @unavailable
		 */
		// 'comma-style': null,

		/**
		 * @eslint {computed-property-spacing}
		 * @unavailable
		 */
		// 'computed-property-spacing': null,

		/**
		 * @eslint {eol-last}
		 * @provider {tslint}
		 */
		eofline: true,

		/**
		 * @eslint {func-call-spacing}
		 * @linrary {tslint-eslint-rules}
		 */
		'ter-func-call-spacing': [
			true,
			'never'
		],

		/**
		 * @eslint {func-name-matching}
		 * @unavailable
		 */
		// 'func-name-matching': null,

		/**
		 * @eslint {func-names}
		 * @unavailable
		 */
		// 'func-names': null,

		/**
		 * @eslint {indent}
		 * @provider {tslint-eslint-rules}
		 */
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
		],

		/**
		 * @eslint {jsx-quotes}
		 * @eslint {quotes}
		 * @provider {tslint}
		 */
		quotemark: [
			true,
			'single',
			'jsx-double', // Rule: jsx-quotes
			'avoid-escape'
		],

		/**
		 * @eslint {key-spacing}
		 * @unavailable
		 */
		// 'key-spacing': null,

		/**
		 * @eslint {keyword-spacing}
		 * @unavailable
		 */
		// 'keyword-spacing': null,

		/**
		 * @eslint {linebreak-style}
		 * @provider {tslint}
		 */
		'linebreak-style': {
			options: 'LF',
			severity: process.platform === 'win32' ? 'off' : 'error'
		},

		/**
		 * @eslint {lines-between-class-members}
		 * @unavailable
		 */
		// 'lines-between-class-members': null,

		/**
		 * @eslint {max-depth}
		 * @unavailable
		 */
		// 'max-depth': null,

		/**
		 * @eslint {max-nested-callbacks}
		 * @unavailable
		 */
		// 'max-nested-callbacks': null,

		/**
		 * @eslint {max-params}
		 * @provider {vrsource-tslint-rules}
		 */
		'max-params': {
			options: 4,
			severity: 'warning'
		},

		/**
		 * @eslint {max-statements-per-line}
		 * @unavailable
		 */
		// 'max-statements-per-line': null,

		/**
		 * @eslint {new-cap}
		 * @notApplicable
		 */
		// 'new-cap': null,

		/**
		 * @eslint {new-parens}
		 * @provider {tslint}
		 */
		'new-parens': true,

		/**
		 * @eslint {no-lonely-if}
		 * @unavailable
		 */
		// 'no-lonely-if': null,

		/**
		 * @eslint {no-mixed-operators}
		 * @unavailable
		 */
		// 'no-mixed-operators': null,

		/**
		 * @eslint {no-mixed-spaces-and-tabs}
		 * @provider {tslint}
		 */
		indent: [
			true,
			'tabs'
		],

		/**
		 * @eslint {no-multi-assign}
		 * @unavailable
		 */
		// 'no-multi-assign': null,

		/**
		 * @eslint {no-multiple-empty-lines}
		 * @provider {tslint}
		 */
		'no-consecutive-blank-lines': true,

		/**
		 * @eslint {no-negated-condition}
		 * @unavailable
		 */
		// 'no-negated-condition': null,

		/**
		 * @eslint {no-restricted-syntax}
		 * @unavailable
		 */
		// 'no-restricted-syntax': null,

		/**
		 * @eslint {no-whitespace-before-property}
		 * @unavailable
		 */
		// 'no-whitespace-before-property': null,

		/**
		 * @eslint {no-trailing-spaces}
		 * @provider {tslint}
		 */
		'no-trailing-whitespace': true,

		/**
		 * @eslint {no-unneeded-ternary}
		 * @unavailable
		 */
		// 'no-unneeded-ternary': null,

		/**
		 * @eslint {object-curly-spacing}
		 * @provider {tslint-eslint-rules}
		 */
		'object-curly-spacing': [
			true,
			'never'
		],

		/**
		 * @eslint {one-var}
		 * @eslint {one-var-declaration-per-line}
		 * @provider {tslint}
		 */
		'one-variable-per-declaration': true,

		/**
		 * @eslint {operator-assignment}
		 * @unavailable
		 */
		// 'operator-assignment': null,

		/**
		 * @eslint {operator-linebreak}
		 * @unavailable
		 */
		// 'operator-linebreak': null,

		/**
		 * @eslint {padded-blocks}
		 * @provider {tslint-eslint-rules}
		 */
		'ter-padded-blocks': [
			true,
			'never'
		],

		/**
		 * @eslint {padding-line-between-statements}
		 * @unavailable
		 */
		// 'padding-line-between-statements': null,

		/**
		 * @eslint {quote-props}
		 * @provider {tslint}
		 */
		'object-literal-key-quotes': [
			true,
			'as-needed'
		],

		/**
		 * @eslint {semi-spacing}
		 * @eslint {semi-spacing}
		 * @eslint {space-before-blocks}
		 * @eslint {space-infix-ops}
		 * @provider {tslint}
		 * @missed {before}
		 */
		whitespace: [
			true,
			'check-operator', // Rule: space-infix-ops
			'check-separator', // Rule: semi-spacing
			'check-preblock' // Rule: space-before-blocks
		],

		/**
		 * @eslint {semi-style}
		 * @unavailable
		 */
		// 'semi-style': null,

		/**
		 * @eslint {semi}
		 * @provider {tslint}
		 */
		semicolon: [
			true,
			'always'
		],

		/**
		 * @eslint {space-before-function-paren}
		 * @provider {tslint}
		 */
		'space-before-function-paren': [
			true,
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],

		/**
		 * @eslint {space-in-parens}
		 * @provider {tslint}
		 */
		'space-within-parens': [
			true,
			0
		],

		/**
		 * @eslint {space-unary-ops}
		 * @unavailable
		 */
		// 'space-unary-ops': null,

		/**
		 * @eslint {switch-colon-spacing}
		 * @unavailable
		 */
		// 'switch-colon-spacing': null,

		/**
		 * @eslint {template-tag-spacing}
		 * @unavailable
		 */
		// 'template-tag-spacing': null,

		/**
		 * @eslint {unicode-bom}
		 * @unavailable
		 */
		// 'unicode-bom': null,

		/**
		 * @eslint {arrow-parens}
		 * @provider {tslint-eslint-rules}
		 */
		'ter-arrow-parens': [
			true,
			'as-needed'
		],

		/**
		 * @eslint {arrow-spacing}
		 * @provider {tslint-eslint-rules}
		 */
		'ter-arrow-spacing': [
			true,
			{
				before: true,
				after: true
			}
		],

		/**
		 * @eslint {constructor-super}
		 * @notApplicable
		 */
		// 'constructor-super': null,

		/**
		 * @eslint {generator-star-spacing}
		 * @unavailable
		 */
		// 'generator-star-spacing': null,

		/**
		 * @eslint {no-class-assign}
		 * @unavailable
		 */
		// 'no-class-assign': null,

		/**
		 * @eslint {no-const-assign}
		 * @notApplicable
		 */
		// 'no-const-assign': null,

		/**
		 * @eslint {no-dupe-class-members}
		 * @notApplicable
		 */
		// 'no-dupe-class-members': null,

		/**
		 * @eslint {no-new-symbol}
		 * @unavailable
		 */
		// 'no-new-symbol': null,

		/**
		 * @eslint {no-this-before-super}
		 * @notApplicable
		 */
		// 'no-this-before-super': null,

		/**
		 * @eslint {no-useless-computed-key}
		 * @unavailable
		 */
		// 'no-useless-computed-key': null,

		/**
		 * @eslint {no-useless-constructor}
		 * @unavailable
		 */
		// 'no-useless-constructor': null,

		/**
		 * @eslint {no-useless-rename}
		 * @unavailable
		 */
		// 'no-useless-rename': null,

		/**
		 * @eslint {require-yield}
		 * @unavailable
		 */
		// 'require-yield': null,

		/**
		 * @eslint {rest-spread-spacing}
		 * @unavailable
		 */
		// 'rest-spread-spacing': null,

		/**
		 * @eslint {symbol-description}
		 * @unavailable
		 */
		// 'symbol-description': null,

		/**
		 * @eslint {template-curly-spacing}
		 * @unavailable
		 */
		// 'template-curly-spacing': null,

		/**
		 * @eslint {yield-star-spacing}
		 * @unavailable
		 */
		// 'yield-star-spacing': null,

		/**
		 * @eslint {valid-jsdoc}
		 * @provider {tslint-eslint-rules}
		 */
		'valid-jsdoc': {
			options: {
				requireReturn: false,
				requireParamType: false,
				requireReturnType: false,
				requireParamDescription: true,
				requireReturnDescription: true
			},
			severity: 'warning'
		}
	}
};
