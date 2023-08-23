import assertExclusiveMin = require('@santi100/assertion-lib/cjs/exclusive-min');
import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
import assertInteger = require('@santi100/assertion-lib/cjs/integer');
import assertPositive = require('@santi100/assertion-lib/cjs/positive');

/**
 * Finds all prime numbers from 2 up to a given number `n`.
 *
 * @param n The upper limit of the range of numbers to check for primes.
 */

function sieve(n: number): number[] {
	assertTypeOf(n, 'number', 'n');
	assertInteger(n, 'n');
	assertPositive(n, 'n');
	assertExclusiveMin(n, 1, 'n');

	if (n === 2) return [n];

	const numbers: Record<number, boolean> = {};
	const limit = Math.floor(n ** 0.5);
	for (let i = 2; i <= n; i++) numbers[i] = false;
	for (let i = 2; i <= limit; i++) {
		if (!numbers[i]) {
			for (let j = i; j <= n / i; j++) {
				numbers[i * j] = true;
			}
		}
	}
	const results = [];
	for (const num in numbers) {
		if (!numbers[num]) results.push(Number(num));
	}
	return results;
}

export = sieve;
