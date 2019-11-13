/* Напишите функцию getDivisors, которая на вход получает
число и возвращает массив его делителей (чисел, на которое
делится данное число). */
function getDivisors(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getDivisors(50));
