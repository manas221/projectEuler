import _ from "lodash";
// a function to check if a given number is prime or not

export const isPrime = (num) => {
  // sieve of eratosthenes implementation
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  const limit = Math.floor(Math.sqrt(num));

  const sieve = _.fill(Array(limit + 1), true);

  for (let i = 5; i * i <= limit; i += 6) {
    if (sieve[i]) {
      // Mark multiples of i as non-prime
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }

    // Check i + 2 (next odd number)
    if (i + 2 <= limit && sieve[i + 2]) {
      for (let j = (i + 2) * (i + 2); j <= limit; j += i + 2) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 5; i <= limit; i += 6) {
    if (sieve[i] && num % i === 0) return false;
    if (i + 2 <= limit && sieve[i + 2] && num % (i + 2) === 0) return false;
  }

  return true;
};
