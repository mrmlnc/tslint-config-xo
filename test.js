'use strict';

const fs = require('fs');
const assert = require('assert');
const tslint = require('tslint');

const nextRules = require('./esnext');
const baseRules = require('./index');

const options = {
	fix: false,
	formatter: 'json',
	rulesDirectory: './'
};

describe('Integration', () => {
	it('Should apply the BASE rules.', () => {
		const content = fs.readFileSync('./fixtures/base.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		linter.lint('base.ts', content, baseRules);

		assert.deepEqual(linter.getResult().failures.map((item) => item.getRuleName()), [
			'no-constant-condition',
			'ter-indent',
			'indent'
		]);
	});

	it('Should apply the ESNEXT rules.', () => {
		const content = fs.readFileSync('./fixtures/esnext.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		linter.lint('esnext.ts', content, nextRules);

		assert.deepEqual(linter.getResult().failures.map((item) => item.getRuleName()), [
			'no-var-keyword'
		]);
	});
});
