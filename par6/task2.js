/* Определить функцию removeEven, которая выбрасывает
чётные цифры из десятичного представления целого
положительного числа. Например, из числа 523424 должно
получиться число 53. Тело функции не должно использовать циклы.
При необходимости примените функциональную композицию.
 */

function removeEven(num) {
  return +String(num)
    .split('')
    .filter(val => val % 2)
    .join('');
}
console.log(removeEven(523424));
