/* Напишите функцию, которая принимает 1 параметр.
При первом вызове, она его запоминает, при втором,
- суммирует переданный параметр с тем, что передали
первый раз и т.д */
function sum(x) {
  let tmp = x;
  sum = function() {
    let arg;
    if (arguments[0]) arg = arguments[0];
    else arg = 0;
    tmp += arg;
    return tmp;
  }
  return sum();
}
console.log(sum(3));
console.log(sum(5));
console.log(sum(228));
