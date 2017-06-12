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

function formatRules(rules) {
	const obj = new Map();

	Object.keys(rules).forEach((rule) => {
		obj.set(rule, rules[rule]);
	});

	return obj;
}

describe('Integration', () => {
	it('Should apply the BASE rules.', () => {
		const content = fs.readFileSync('./fixtures/base.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		baseRules.rules = formatRules(baseRules.rules);

		linter.lint('base.ts', content, baseRules);

		const warnings = linter.getResult().failures.map((item) => item.getRuleName());

		assert.ok(warnings.indexOf('no-constant-condition') !== -1);
		assert.ok(warnings.indexOf('ter-indent') !== -1);
	});

	it('Should apply the ESNEXT rules.', () => {
		const content = fs.readFileSync('./fixtures/esnext.ts', 'utf8').toString();
		const linter = new tslint.Linter(options);

		nextRules.rules = formatRules(nextRules.rules);

		linter.lint('esnext.ts', content, nextRules);

		const warnings = linter.getResult().failures.map((item) => item.getRuleName());

		assert.ok(warnings.indexOf('no-var-keyword') !== -1);
	});
});
