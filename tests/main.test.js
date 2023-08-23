describe('sieve', () => {
	const sieve = require('..');
	test('it correctly finds the primes in the range [1, 100]', () => {
		const primes = [
			2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
			71, 73, 79, 83, 89, 97
		];
		expect(sieve(100)).toEqual(primes);
		expect(sieve(2)).toEqual([2]);
	});
	describe('error handling', () => {
		test('it correctly handles incorrect argument types', () => {
			expect(sieve).toThrow(/"n" must be of type "number"/);
			expect(() => sieve('not a number')).toThrow(
				/"n" must be of type "number"/
			);
		});
		test('it correctly handles incorrect amounts', () => {
			expect(() => sieve(-1)).toThrow(/"n" must be positive/);
			expect(() => sieve(2.6)).toThrow(/"n" must be an integer/);
		});
	});
});
