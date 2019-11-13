/* Создайте функцию, принимающую на входе
целое число и возвращающую количество цифр  в этом числе. */
function countNumbers(n) {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  const num = String(n);
  return console.log(num.split('').length);
}
countNumbers(123);
