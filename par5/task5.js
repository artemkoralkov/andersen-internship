/* Описать класс, представляющий треугольник.
Предусмотреть методы для создания объектов,
вычисления площади, периметра и точки
пересечения медиан. Описать свойства для
получения состояния объекта. */
class Triangle {
  constructor(x1, y1, x2, y2, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
  }

  getArea() {
    console.log(
      0.5 *
        Math.abs(
          (this.x2 - this.x1) * (this.y3 - this.y1) - (this.x3 - this.x1) * (this.y2 - this.y1)
        )
    );
  }

  getPerimetr() {
    console.log(
      Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2) +
        Math.sqrt((this.x3 - this.x1) ** 2 + (this.y3 - this.y1) ** 2) +
        Math.sqrt((this.x2 - this.x3) ** 2 + (this.y2 - this.y3) ** 2)
    );
  }

  getMeredian() {
    console.log(`(${(this.x1 + this.x2 + this.x3) / 3}, ${(this.y1 + this.y2 + this.y3) / 3})`);
  }
}
