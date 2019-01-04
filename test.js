'use strict';

const fs = require('fs');
const assert = require('assert');
const tslint = require('tslint');

const options = {
	fix: false,
	formatter: 'json',
	rulesDirectory: './'
};

describe('Integration', () => {
	it('Should apply the BASE rules.', () => {
		const content = fs.readFileSync('./fixtures/base.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		const rules = tslint.Linter.loadConfigurationFromPath('./index.js');

		linter.lint('base.ts', content, rules);

		const expected = [
			'no-constant-condition',
			'ter-indent',
			'indent'
		];

		const actual = linter.getResult().failures.map((item) => item.getRuleName());

		assert.deepStrictEqual(actual, expected);
	});

	it('Should apply the ESNEXT rules.', () => {
		const content = fs.readFileSync('./fixtures/esnext.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		const rules = tslint.Linter.loadConfigurationFromPath('./esnext.js');

		linter.lint('esnext.ts', content, rules);

		const expected = [
			'no-var-keyword'
		];

		const actual = linter.getResult().failures.map((item) => item.getRuleName());

		assert.deepStrictEqual(actual, expected);
	});
});
