/* Найти сумму чисел от 100 до 200 кратных 17 */
let sum = 0;
for (let i = 100; i <= 200; i++) {
  if (i % 17 === 0) {
    sum += i;
  }
}
console.log(sum);
