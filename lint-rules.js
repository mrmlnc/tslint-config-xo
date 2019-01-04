const fs = require('fs');

const original = {
	base: require('./original'),
	esnext: require('./original/esnext.js')
};

const current = {
	base: fs.readFileSync('./index.js', 'utf-8'),
	esnext: fs.readFileSync('./esnext.js', 'utf-8')
};

function checkNewRuleDeclarations(rules, content) {
	const nonDescribedRules = [];

	Object.keys(rules).forEach((ruleName) => {
		const ruleDeclaration = formatRuleDeclaration(ruleName);

		if (content.indexOf(ruleDeclaration) >= 0) {
			return;
		}

		nonDescribedRules.push(ruleName);
	});

	if (nonDescribedRules.length !== 0) {
		console.dir(nonDescribedRules);

		throw new Error('new');
	}
}

function formatRuleDeclaration(name) {
	return '@eslint {' + name + '}';
}

function checkOldRuleDeclarations(content, rules) {
	const oldDescribedRules = [];

	const ruleDeclarations = content.match(/@eslint\s{(.+)?}/g);

	ruleDeclarations.forEach((ruleDeclaration) => {
		const ruleName = ruleDeclaration.match(/@eslint\s{(.+)?}/)[1];

		if (ruleName in rules) {
			return;
		}

		oldDescribedRules.push(ruleName);
	});

	if (oldDescribedRules.length !== 0) {
		console.dir(oldDescribedRules);

		throw new Error('old');
	}
}

console.log('Check new rule declarations in "index.js"');
checkNewRuleDeclarations(original.base.rules, current.base);
console.log('done');

console.log('Check new rule declarations in "esnext.js"');
checkNewRuleDeclarations(original.esnext.rules, current.esnext);
console.log('done');

console.log('Check old rule declarations in "index.js"');
checkOldRuleDeclarations(current.base, original.base.rules);
console.log('done');

console.log('Check old rule declarations in "esnext.js"');
checkOldRuleDeclarations(current.esnext, original.esnext.rules);
console.log('done');
