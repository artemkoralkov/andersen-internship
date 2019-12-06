/* Измените функцию partial из предыдущей задачи так,
чтобы она позволяла зафиксировать не только первые аргументы,
а любые (пропущенные аргументы обозначаются с помощью undefined).
Новую функцию назовите partialAny, чтобы не путать с предыдущей.
 */

function partialAny(fun, ...args) {
  return function(...rest) {
    args = args.map(val => (val === undefined ? rest.shift() : val));
    return fun(...args, ...rest);
  };
}
function test(a, b, c) {
  return `a=${a},b=${b},c=${c}`;
}
const test1 = partialAny(test, 1, undefined, 3);
console.log(test1(5)); // a=1,b=5,c=3
