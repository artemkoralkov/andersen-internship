/* Имеется массив чисел. Используя встроенную функцию
высшего порядка map(), создайте новый массив, который
будет содержать удвоенные значения первого. */
const arr = [2, 15, 20, 45];
const newarr = arr.map(val => val * 2);
console.log(newarr); // [2, 15, 20, 45]
