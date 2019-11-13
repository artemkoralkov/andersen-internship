/* Напишите две функции, reverseArray и reverseArrayInPlace.
Первая получает массив как аргумент и выдаёт новый массив, с
обратным порядком элементов. Вторая работает как оригинальный
метод reverse – она меняет порядок элементов на обратный в том
массиве, который был ей передан в качестве аргумента.
Не используйте стандартный метод reverse.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
function reverseArray(arr) {
  const newArr = [];
  for (const i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const a = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = a;
  }
  return arr;
}
console.log(reverseArray(['A', 'B', 'C']));
const array = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(array));
