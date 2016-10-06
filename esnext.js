'use strict';

const path = require('path');

const baseRules = require('./index');

module.exports = {
	rulesDirectory: [
		path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
		path.dirname(require.resolve('tslint-microsoft-contrib'))
	],
	rules: Object.assign({
		// Not implement:
		//   * prefer-arrow-callback
		//   * generator-star-spacing
		//   * object-shorthand
		//   * no-await-in-loop
		//   * prefer-template
		//   * prefer-numeric-literals

		'no-var-keyword': true, // no-var
		'prefer-const': true // No option `destructuring: 'all'`
	}, baseRules.rules)
};
