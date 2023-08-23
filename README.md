# Santi's Energetic Sieve of Eratosthenes

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/eratosthenes-sieve/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100/eratosthenes-sieve
[stars badge]: https://img.shields.io/github/stars/santi100a/eratosthenes-sieve.svg
[license badge]: https://img.shields.io/github/license/santi100a/eratosthenes-sieve.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100/eratosthenes-sieve
[npm home]: https://npmjs.org/package/@santi100/eratosthenes-sieve
[repo actions]: https://github.com/santi100a/eratosthenes-sieve/actions
[repo url]: https://github.com/santi100a/eratosthenes-sieve
[bundlephobia url]: https://bundlephobia.com/package/@santi100/eratosthenes-sieve@latest

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js
- 📘 Includes TypeScript definitions

## What's this?

This is a simple, lightweight implementation of the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

## Installation

- Via NPM: `npm install @santi100/eratosthenes-sieve`
- Via Yarn: `yarn add @santi100/eratosthenes-sieve`
- Via PNPM: `pnpm install @santi100/eratosthenes-sieve`

## API

- `function sieve(n: number): number[];` Finds all prime numbers from 2 up to a given number `n`.

  | Name | Type | Description | Optional? | Default |
  | ---- | ---- | ----------- | --------- | ------- |
  | `n` | `number` | The upper limit of the range of numbers to check for primes. | No | _N/A_ |

## Usage

```typescript
// Import the sieve function
const sieve = require('@santi100/eratosthenes-sieve'); // CJS
import sieve = require('@santi100/eratosthenes-sieve'); // TypeScript
import sieve from '@santi100/eratosthenes-sieve'; // ESM


// Use the sieve function to find prime numbers up to 100
const primesUpTo100 = sieve(100);

// Print the prime numbers
console.log('Prime numbers up to 100:', primesUpTo100); // outputs [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/eratosthenes-sieve/issues) or [pull request](https://github.com/santi100a/eratosthenes-sieve/pulls)!
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
