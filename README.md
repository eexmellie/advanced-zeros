## Goal

The goal was to implement `getZerosCount` function, which takes any integer number `number` (`1 <= number <= 10^7`) as first argument and any integer number `base` (`2 <= base <= 256`) as second argument. This function should calculate *how many zeros there are at the end of number, which is factorial of `number` in `base` base system*

For example:
```js
    const zerosCount = getZerosCount(10, 10); // Factorial of 10 in base-10 number system is 3628800
    console.log(zerosCount); // 2. Because there is 2 *tailing* zeros in number 3628800
```

```js
    const zerosCount = getZerosCount(16, 16); // Factorial of 16 is 20922789888000 in base-10 system and *130777758000* in base-16 number system
    console.log(zerosCount); // 3. Because there is 3 *tailing* zeros in number *130777758000*
```

## Checking the solution

1. Clone this repo.

2. Run `npm install`

3. Run `npm test` for confirmation. You can add your own tests to *test.js* to verify the solution.


Solution itself is in the *src/index.js*


### N.B.
Trying to calculate factorial won't work. First, it will not get exact answer on big numbers. Second - it could take several years to calculate factorial on big integers. The goal was to approach the solution mathematically.
