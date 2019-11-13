/* Создайте функцию, принимающую на входе целое число
 и возвращающую наибольшую цифру в этом числе. */
function findMaxNumber(n) {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  let num = String(n);
  num = num.split('');
  const numMax = Math.max(...num);
  return console.log(numMax);
}
findMaxNumber(123);
