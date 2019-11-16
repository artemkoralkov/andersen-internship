/* Напишите свой собственный Array.prototype.myFilter (),
который должен вести себя точно так же, как Array.prototype.filter().
Можно использовать цикл for или метод Array.prototype.forEach (). */
const s = [23, 65, 98, 5];
Array.prototype.myFilter = function(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s);
