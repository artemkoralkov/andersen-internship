const arr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    arr.push(i);
  }
}
arr.reverse();
console.log(arr);
