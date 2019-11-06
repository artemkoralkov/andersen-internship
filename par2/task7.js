const currentDate = new Date();
const nextDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() + 100
);
console.log(currentDate);
console.log(nextDate);
