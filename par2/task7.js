const currentDate = new Date();
const nextDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 100,
  currentDate.getHours(),
  currentDate.getMinutes(),
  currentDate.getSeconds(),
  currentDate.getMilliseconds()
);
console.log(currentDate);
console.log(nextDate);
