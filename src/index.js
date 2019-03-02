module.exports = function getZerosCount(number, base) {
  const basePrimeFactors = findPrimeFactors(base);
  const powersOfFactors = [];

  for (const [prime, amount] of basePrimeFactors.entries()) {
    let powerOfPrime = 0;
    for (let i = 1, pow = Math.pow(prime, i); pow <= number; i++, pow = Math.pow(prime, i)) {
      powerOfPrime = powerOfPrime + Math.floor(number / pow);
    }
    powersOfFactors.push( Math.floor(powerOfPrime / amount) );
  }
  return Math.min(...powersOfFactors);
}

  function findPrimeFactors(number) {
    const primeFactors = new Map();

    // choosing starting value for the loop
    // depending on wether number is even or odd
    let i = number % 2 === 0 ? 2 : 3;
    for (i; i <= number; i++) {
      while(number % i === 0) {
        primeFactors.set(i, primeFactors.get(i) + 1 || 1);
        number = number / i;
      }
    }
    return primeFactors;
  }