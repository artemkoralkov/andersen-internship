/* Преобразовать строки двумерного массива в столбцы.
Класс будет содержать два метода: один заполнит массив
значениями, второй произведет замену значений строк на
значения столбцов. */
class Arr {
  constructor(n, m) {
    this.n = n;
    this.m = m;
    this.arr = new Array(this.n);
    for (let i = 0; i < this.n; i++) {
      this.arr[i] = new Array(m);
    }
  }

  setArr() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        this.arr[i][j] = Math.round(1 + Math.random() * 9);
      }
    }
  }

  reverseArr() {
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.m; j++) {
        this.arr[i][j] = this.arr[j][i];
      }
    }
  }
}

const arr1 = new Arr(5, 5);
console.log(arr1);
arr1.setArr();
console.log(arr1);
arr1.reverseArr();
console.log(arr1);
