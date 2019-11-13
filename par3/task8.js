/* Реализуйте предыдущие задачи используя функциональные
выражения и стрелочные функции. */
const countNumbers1 = function(n) {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  const num = String(n);
  return console.log(num.split('').length);
};
countNumbers1(123);


const countNumbers2 = n => {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  const num = String(n);
  return console.log(num.split('').length);
};
countNumbers2(123);


const findMaxNumber1 = function(n) {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  let num = String(n);
  num = num.split('');
  const numMax = Math.max(...num);
  return console.log(numMax);
};
findMaxNumber1(123);


const findMaxNumber2 = n => {
  if (typeof n !== 'number') {
    return console.log('n не число');
  }
  let num = String(n);
  num = num.split('');
  const numMax = Math.max(...num);
  return console.log(numMax);
};
findMaxNumber2(123);


const isSimple1 = function(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(isSimple1(2));


const isSimple2 = n => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log(isSimple2(2));


const sum1 = function(...args) {
  let sum = 0;
  args.forEach(element => {
    sum += element;
  });
  return sum;
};
console.log(sum1(5, 4, 4, 110, 5448948));


const sum2 = (...args) => {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  return sum;
};
console.log(sum2(5, 4, 4, 110, 5448948));


const getDivisors1 = function(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(getDivisors1(50));


const getDivisors2 = n => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(getDivisors2(50));


const range1 = function(a, b, n = 1) {
  const arr = [];
  if (n < 0) {
    for (let i = a; i >= b; i += n) {
      arr.push(i);
    }
    return arr;
  }
  for (let i = a; i <= b; i += n) {
    arr.push(i);
  }
  return arr;
};
const sum3 = function(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};
console.log(sum3(range1(1, 10)));


const range2 = (a, b, n = 1) => {
  const arr = [];
  if (n < 0) {
    for (let i = a; i >= b; i += n) {
      arr.push(i);
    }
    return arr;
  }
  for (let i = a; i <= b; i += n) {
    arr.push(i);
  }
  return arr;
};
const sum4 = arr => {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};
console.log(sum4(range2(1, 10)));


const reverseArray1 = function(arr) {
  const newArr = [];
  for (const i of arr) {
    newArr.unshift(i);
  }
  return newArr;
};


const reverseArrayInPlace1 = function(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const a = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = a;
  }
  return arr;
};
console.log(reverseArray1(['A', 'B', 'C']));
const array = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace1(array));


const reverseArray2 = arr => {
  const newArr = [];
  for (const i of arr) {
    newArr.unshift(i);
  }
  return newArr;
};


const reverseArrayInPlace2 = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    const a = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = a;
  }
  return arr;
};
console.log(reverseArray2(['A', 'B', 'C']));
console.log(reverseArrayInPlace2(array));
