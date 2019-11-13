/* Напишите функцию, которая принимает ряд чисел
и возвращает их сумму, количество чисел на входе
может быть произвольным (sum(2, 3) -> 5, sum(1, 2, 3) ->6). */
function sum(...args) {
  let sum = 0;
  args.forEach(element => {
    sum += element;
  });
  return sum;
}
console.log(sum(5, 4, 4, 110, 5448948));
