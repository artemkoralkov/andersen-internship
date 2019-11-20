/* Создать абстрактный класс Figure с методами вычисления площади
и периметра, а также методом, выводящим информацию о фигуре на экран.
Создать производные классы: Rectangle (прямоугольник), Circle (круг),
Triangle (треугольник) со своими методами вычисления площади и периметра.
Создать массив n фигур и вывести полную информацию о фигурах на экран. */
class Figure {
  getPerimetr() {}

  getArea() {}

  getInformation() {}
}
class Circle extends Figure {
  constructor(centr, radius) {
    super();
    this.centr = centr;
    this.radius = radius;
  }

  getPerimetr() {
    console.log(2 * Math.PI * this.radius);
  }

  getArea() {
    console.log(Math.PI * this.radius ** 2);
  }

  getInformation() {
    console.log(this.centr, this.radius);
    this.getPerimetr();
    this.getArea();
  }
}
class Rectangle extends Figure {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  getPerimetr() {
    console.log(2 * (this.length + this.width));
  }

  getArea() {
    console.log(this.length * this.width);
  }

  getInformation() {
    console.log(this.length, this.width);
    this.getPerimetr();
    this.getArea();
  }
}
class Triangle extends Figure {
  constructor(a, b, c, alpha, beta, gamma) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.alpha = alpha;
    this.beta = beta;
    this.gamma = gamma;
  }

  getPerimetr() {
    console.log(this.a + this.b + this.c);
  }

  getArea() {
    console.log(0.5 * (this.a * this.b * Math.sin((this.gamma / 180) * Math.PI)));
  }

  getInformation() {
    console.log(this.a, this.b, this.c, this.alpha, this.beta, this.gamma);
    this.getPerimetr();
    this.getArea();
  }
}
const Array = [new Circle([0, 0], 5), new Rectangle(5, 6), new Triangle(5, 7, 9, 45, 30, 40)];
for (let i = 0; i < Array.length; i++) {
  Array[i].getInformation();
}
