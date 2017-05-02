'use strict';

const path = require('path');

const baseRules = require('./index');

const nodeModulesPath = path.dirname(path.dirname(require.resolve('tslint-eslint-rules')));

module.exports = {
	rulesDirectory: [
		path.join(nodeModulesPath, 'tslint-eslint-rules/dist/rules'),
		path.join(nodeModulesPath, 'tslint-microsoft-contrib'),
		path.join(nodeModulesPath, 'vrsource-tslint-rules/rules'),
		path.join(nodeModulesPath, 'tslint-immutable/rules')
	],
	rules: Object.assign({
		// Not implement:
		//   * generator-star-spacing
		//   * object-shorthand
		//   * no-await-in-loop
		//   * prefer-numeric-literals

		'ter-prefer-arrow-callback': true, // + prefer-arrow-callback
		'no-var-keyword': true, // + no-var
		'prefer-const': true, // + No option `destructuring: 'all'`
		'prefer-template': true
	}, baseRules.rules)
};
