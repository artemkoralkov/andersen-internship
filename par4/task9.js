/* Добавьте в Array.prototype метод myReducer(), возвращающий
новый массив, содержащий числа-элементы, делящиеся на 5.
*/
Array.prototype.myReducer = function(callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.myReducer((total, item) => {
  if (item % 5 === 0) {
    total.push(item);
  }
  return total;
}, []);
console.log(newArray);
