/* Напишите функцию, которая принимает ряд чисел
и возвращает их сумму, количество чисел на входе
может быть произвольным (sum(2, 3) -> 5, sum(1, 2, 3) ->6). */
function sum(...args) {
  return args.reduce((s, v) => s + v);
}
console.log(sum(5, 4, 4, 110, 5448948));
