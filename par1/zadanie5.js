/* Среди трех чисел найти среднее. Если среди чисел есть равные,
 вывести сообщение'Ошибка'. */
const a = 1;
const b = 2;
const c = 3;
if (a === b || a === c || c === b) {
  console.log('Ошибка');
}
let avg;
if ((a > b && a < c) || (a < b && a > b)) {
  avg = a;
} else if ((b > a && b < c) || (b < a && b > c)) {
  avg = b;
} else {
  avg = c;
}
console.log(avg);
