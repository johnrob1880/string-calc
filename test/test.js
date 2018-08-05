const assert = require('assert');
const stringCalc = require('..');



function test(equation, expected) {
	assert.equal(stringCalc(equation, () => assert.fail('failed')), expected);
	console.log(`${equation} \u001B[32m✓\u001B[39m ${expected}`);
}

test('1+2', 3);
test('2-1', 1);
test('2*2', 4);
test('8/2', 4);

test('1+1+1', 3);
test('(2-1)/1', 1);

test('1.0+2.1', 3.1);
