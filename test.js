'use strict';

const fs = require('fs');
const assert = require('assert');
const Linter = require('tslint');

const nextRules = require('./esnext');
const baseRules = require('./index');

describe('Integration', () => {
  it('Should apply the BASE rules.', () => {
    const content = fs.readFileSync('./fixtures/base.ts', 'utf8');
    const tsLint = new Linter('base.ts', content, {
      formatter: 'json',
      configuration: baseRules
    });

    const result = tsLint.lint();

    assert.equal(result.failures[0].ruleName, 'no-constant-condition');
    assert.equal(result.failures[1].ruleName, 'indent');
  });

  it('Should apply the ESNEXT rules.', () => {
    const content = fs.readFileSync('./fixtures/esnext.ts', 'utf8');
    const tsLint = new Linter('esnext.ts', content, {
      formatter: 'json',
      configuration: nextRules
    });

    const result = tsLint.lint();

    assert.equal(result.failures[0].ruleName, 'no-var-keyword');
    assert.equal(result.failures[1].ruleName, 'prefer-const');
  });
});
