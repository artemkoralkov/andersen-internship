/* Напишите функцию partial(fn, a1, a2, ....), которая позволяет
зафиксировать один или несколько аргументов функции. 
 */

function partial(fun, ...args) {
  return function(...rest) {
    return fun(...args, ...rest);
  };
}
function add(a, b) {
  return a + b;
}
function mult(a, b, c, d) {
  return a * b * c * d;
}

const add5 = partial(add, 5);
console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

const mult23 = partial(mult, 2, 3);
// зафиксированы первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6
