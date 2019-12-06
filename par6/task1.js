/* Применяя принципы функционального программирования
вывести «Hello World» n количество раз без использования
циклов (пример f(“Hello World”, 5) выведет Hello World 5 раз.
*/

function f(str, num) {
  return console.log(`${str}\n`.repeat(num));
}
f('Hello World', 10);
