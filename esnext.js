'use strict';

const baseRules = require('./index');

module.exports = {
	rulesDirectory: baseRules.rulesDirectory,
	rules: Object.assign({
		/**
		 * @eslint {no-var}
		 * @tslint {no-var-keyword}
		 * @provider {tslint}
		 */
		'no-var-keyword': true,

		/**
		 * @eslint {object-shorthand}
		 * @tslint {object-literal-shorthand}
		 * @provider {tslint}
		 */
		'object-literal-shorthand': true,

		/**
		 * @eslint {prefer-arrow-callback}
		 * @tslint {ter-prefer-arrow-callback}
		 * @provider {tslint-eslint-rules}
		 */
		'ter-prefer-arrow-callback': [
			true,
			{
				allowNamedFunctions: true
			}
		],

		/**
		 * @eslint {prefer-const}
		 * @tslint {prefer-const}
		 * @provider {tslint-eslint-rules}
		 */
		'prefer-const': [
			true,
			{
				destructuring: 'all'
			}
		]

		/**
		 * @eslint {prefer-numeric-literals}
		 * @unavailable
		 */
		// 'prefer-numeric-literals': null,

		/**
		 * @eslint {prefer-rest-params}
		 * @unavailable
		 */
		// 'prefer-rest-params': null,

		/**
		 * @eslint {prefer-spread}
		 * @unavailable
		 */
		// 'prefer-spread': null,

		/**
		 * @eslint {prefer-destructuring}
		 * @unavailable
		 */
		// 'prefer-destructuring': null,
	}, baseRules.rules)
};
