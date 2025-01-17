/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/

/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
  let array = [];
  for (i = 0; i <= number; i++) {
    if (number % i === 0) {
      array.push(i);
    }
  }
  if (array.length === 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(3));

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num += 1;
  }
  return primes;
}

console.log(firstNPrimes(4));

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {
  // [2, 3, 5, 7]
  let sum = firstNPrimes(n).reduce((a, b) => a + b);
  return sum;
}

console.log(sumOfNPrimes(4));
