/* Напишите свой собственный Array.prototype.myMap(),
который должен вести себя точно так же, как Array.prototype.map().
Можно использовать цикл for или метод Array.prototype.forEach (). */
const s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
  const arr1 = [];
  for (let i = 0; i < this.length; i++) {
    arr1.push(callback(this[i]));
  }
  return arr1;
};
const aNew = s.myMap(function(item) {
  return item * 2;
});
console.log(aNew);
