/* Напишите функцию высшего порядка myHiOrderFunction,
которая принимает в качестве 1 аргумента другую функцию,
например, sayName, и применяет ее ко всем остальным
аргументам. */
function sayName(name) {
  return `Я - ${name}`;
}
function miHiOrderFunction(func, ...args) {
  const arr = [];
  for (let i = 0; i < args.length; i++) {
    arr.push(func(args[i]));
  }
  const str = arr.join(' ');
  console.log(str);
}
miHiOrderFunction(sayName, 'Вася'); // я - Вася
miHiOrderFunction(sayName, 'Петя', 'Маша', 'John'); // Я -Петя Я - Маша ...
miHiOrderFunction(sayName, 'Иван', 'Слава', 'Крис', 'Толя');
