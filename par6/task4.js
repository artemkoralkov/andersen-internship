/* Создайте мемоизированный вариант функции, вычисляющей
факториал.
 */

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return factorial(n - 1) * n;
}

function memoize(fun) {
  const cache = {};
  return function(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    const result = fun(n);
    cache[n] = result;
    return result;
  };
}
const memoFactorial = memoize(n => {
  if (n === 0 || n === 1) return 1;
  return memoFactorial(n - 1) * n;
});
const memorizeFactorial = memoize(factorial);
console.log(memorizeFactorial(50));
console.log(memorizeFactorial(52));
console.log(memoFactorial(50));
console.log(memoFactorial(52));
