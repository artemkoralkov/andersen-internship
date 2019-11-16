/* Имеется функция squareList. Вам необходимо завершить код для нее, используя
любую комбинацию функций высшего порядка map(), filter() и reduce(), чтобы она
возвращала новый массив, содержащий только квадрат только положительных целых
чисел (десятичные числа не являются целыми числами). */
const squareList = arr => {
  return arr.filter(val => val > 0 && val % 1 === 0).map(val => val * val);
};
const squaredIntegers = squareList([-3, 3, 8, 8.2, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [9, 64, 25, 9]
