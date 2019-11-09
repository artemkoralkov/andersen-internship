/*  С помощью встроенного объекта Date 
получить текущую дату и вычислить дату, которая
наступит через 100 дней.
*/
const currentDate = new Date();
const nextDate = new Date();
nextDate.setDate(currentDate.getDate() + 100);
console.log(currentDate);
console.log(nextDate);
