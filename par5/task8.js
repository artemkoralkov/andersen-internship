/* Создать иерархию классов: линия - прямоугольник - пирамида.
Все классы должны содержать методы для фиксации и получения
значений всех координат, а производные классы методы вычисления
площади (прямоугольник), площади поверхности и объема (пирамида). */
class Line {
  constructor(A, B) {
    this.A = A;
    this.B = B;
  }

  setA(tmpA) {
    this.A = tmpA;
  }

  setB(tmpB) {
    this.B = tmpB;
  }

  getA() {
    console.log(this.A);
  }

  getB() {
    console.log(this.B);
  }
}
class Rectangle extends Line {
  constructor(A, B, C, D) {
    super(A, B);
    this.C = C;
    this.D = D;
  }

  setC(tmpC) {
    this.C = tmpC;
  }

  setD(tmpD) {
    this.D = tmpD;
  }

  getC() {
    console.log(this.C);
  }

  getD() {
    console.log(this.D);
  }

  getArea() {
    console.log(Math.abs(this.B[0] - this.A[0]) * Math.abs(this.B[1] - this.C[1]));
  }

  getPerimetr() {
    console.log(2 * (Math.abs(this.B[0] - this.A[0]) + Math.abs(this.B[1] - this.C[1])));
  }
}
class Pyramid extends Rectangle {
  constructor(A, B, C, D, H) {
    super(A, B, C, D);
    this.H = H;
  }

  getArea() {
    console.log(
      4 * Math.sqrt(1.5 * Math.sqrt((this.B[0] - this.C[0]) ** 2 + (this.B[1] - this.C[1]) ** 2)) +
        Math.abs(this.B[0] - this.A[0]) * Math.abs(this.B[1] - this.C[1])
    );
  }

  getVolume() {
    console.log(0.33 * Math.abs(this.B[0] - this.A[0]) * Math.abs(this.B[1] - this.C[1]) * this.H);
  }
}
