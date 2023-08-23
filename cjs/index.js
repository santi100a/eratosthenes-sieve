'use strict';
var assertExclusiveMin = require('@santi100/assertion-lib/cjs/exclusive-min');
var assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
var assertInteger = require('@santi100/assertion-lib/cjs/integer');
var assertPositive = require('@santi100/assertion-lib/cjs/positive');
/**
 * Finds all prime numbers from 2 up to a given number `n`.
 *
 * @param n The upper limit of the range of numbers to check for primes.
 */
function sieve(n) {
	assertTypeOf(n, 'number', 'n');
	assertInteger(n, 'n');
	assertPositive(n, 'n');
	assertExclusiveMin(n, 1, 'n');
	if (n === 2) return [n];
	var numbers = {};
	var limit = Math.floor(Math.pow(n, 0.5));
	for (var i = 2; i <= n; i++) numbers[i] = false;
	for (var i = 2; i <= limit; i++) {
		if (!numbers[i]) {
			for (var j = i; j <= n / i; j++) {
				numbers[i * j] = true;
			}
		}
	}
	var results = [];
	for (var num in numbers) {
		if (!numbers[num]) results.push(Number(num));
	}
	return results;
}
module.exports = sieve;
